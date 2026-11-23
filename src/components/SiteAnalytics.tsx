"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

function contactChannel(href: string) {
  if (href.startsWith("https://wa.me/") || href.startsWith("https://api.whatsapp.com/")) return "whatsapp";
  if (href.startsWith("tel:")) return "phone";
  if (href.startsWith("mailto:")) return "email";
  if (href === "/contact" || href.startsWith("/contact?")) return "contact-page";
  return null;
}

export default function SiteAnalytics() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const channel = contactChannel(link.getAttribute("href") ?? "");
      if (!channel) return;

      track("Contact clicked", {
        channel,
        path: window.location.pathname,
      });
    }

    function handleSubmit(event: SubmitEvent) {
      const form = event.target;
      if (!(form instanceof HTMLFormElement) || !form.dataset.analyticsEvent) return;

      track(form.dataset.analyticsEvent, {
        path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}
