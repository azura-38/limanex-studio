(() => {
  /* =========================================================
     1. Mobile Navigation Toggle
     ========================================================= */
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (menuToggle && mobileNav) {
    const closeMenu = () => {
      mobileNav.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    };

    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") === "true";
      mobileNav.hidden = open;
      menuToggle.setAttribute("aria-expanded", String(!open));
      menuToggle.setAttribute("aria-label", open ? "Open navigation menu" : "Close navigation menu");
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !mobileNav.hidden) {
        closeMenu();
        menuToggle.focus();
      }
    });
  }

  /* =========================================================
     2. Meowoirs Video Playback
     ========================================================= */
  const video = document.getElementById("meowoirs-video");
  const videoToggle = document.getElementById("video-toggle");
  const iconPlay = document.getElementById("video-icon-play");
  const iconPause = document.getElementById("video-icon-pause");
  const videoLabel = document.getElementById("video-label");

  if (video && videoToggle && iconPlay && iconPause && videoLabel) {
    const syncVideoUI = (playing) => {
      videoToggle.setAttribute("aria-pressed", String(playing));
      iconPlay.toggleAttribute("hidden", playing);
      iconPause.toggleAttribute("hidden", !playing);
      videoLabel.textContent = playing ? "Pause film" : "Play film";
    };

    videoToggle.addEventListener("click", async () => {
      if (video.paused || video.ended) {
        try {
          await video.play();
          syncVideoUI(true);
        } catch {
          syncVideoUI(false);
        }
      } else {
        video.pause();
        syncVideoUI(false);
      }
    });

    video.addEventListener("ended", () => syncVideoUI(false));
    video.addEventListener("pause", () => syncVideoUI(false));
    video.addEventListener("play", () => syncVideoUI(true));
  }

  /* =========================================================
     3. Homepage Studio Catalog Slider
     ========================================================= */
  const tabs = [...document.querySelectorAll(".catalog-tab")];
  const panels = [...document.querySelectorAll(".catalog-panel")];
  const dots = [...document.querySelectorAll(".slide-dot")];
  const prevBtn = document.getElementById("slide-prev");
  const nextBtn = document.getElementById("slide-next");
  const counterEl = document.getElementById("slide-counter");

  if (tabs.length && panels.length === tabs.length) {
    let activeIndex = 0;

    const showSlide = (nextIndex, focusTab = false) => {
      activeIndex = (nextIndex + tabs.length) % tabs.length;

      tabs.forEach((tab, idx) => {
        const active = idx === activeIndex;
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
      });

      panels.forEach((panel, idx) => {
        panel.hidden = idx !== activeIndex;
      });

      dots.forEach((dot, idx) => {
        dot.setAttribute("aria-current", idx === activeIndex ? "true" : "false");
      });

      if (counterEl) {
        counterEl.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(tabs.length).padStart(2, "0")}`;
      }

      if (focusTab) {
        tabs[activeIndex].focus();
      }
    };

    tabs.forEach((tab, idx) => {
      tab.addEventListener("click", () => showSlide(idx));
      tab.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          showSlide(idx + 1, true);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          showSlide(idx - 1, true);
        }
      });
    });

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => showSlide(idx));
    });

    if (prevBtn) prevBtn.addEventListener("click", () => showSlide(activeIndex - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => showSlide(activeIndex + 1));

    showSlide(0);
  }

  /* =========================================================
     4. Homepage Quick Preview Dialog
     ========================================================= */
  const dialog = document.getElementById("preview-dialog");
  const dialogStamp = document.getElementById("dialog-stamp");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogBody = document.getElementById("dialog-body");
  const dialogLink = document.getElementById("dialog-link");
  const dialogClose = document.getElementById("dialog-close");
  const dialogDismiss = document.getElementById("dialog-dismiss");

  const PREVIEWS = {
    vitacase: {
      num: "№ 01",
      category: "Personal medical vault · Android",
      title: "VitaCase",
      link: "/apps/vitacase",
      linkText: "Explore VitaCase",
      summary:
        "VitaCase stores blood test PDFs, clinic reports, medication reminders, and your saved doctors encrypted locally on Android — with no cloud upload or OCR scanning.",
      rows: [
        { label: "Blood_Test_Oct2026.pdf", ref: "PDF vault", value: "1.4 MB" },
        { label: "Prescription_Autumn.pdf", ref: "Prescription", value: "420 KB" },
        { label: "Dr. Selin Kaya", ref: "Internal Medicine", value: "Saved doctor" },
        { label: "Vitamin D3 2000 IU", ref: "Daily reminder", value: "20:00" },
      ],
      note: "AES-256-GCM encrypted · On-device only · No OCR",
    },
    meowoirs: {
      num: "№ 02",
      category: "Cat relationship diary · Android",
      title: "Meowoirs",
      link: "/apps/meowoirs",
      linkText: "Explore Meowoirs",
      summary:
        "Meowoirs pairs photo milestones and short daily notes with dual mood reflections for both you and your cat, stored offline in local SQLite.",
      rows: [
        { label: "Profile", ref: "Home cat", value: "Milo · 4 yrs" },
        { label: "Latest entry", ref: "Oct 18 · 16:40", value: "Window nap" },
        { label: "Cat mood", ref: "Observed", value: "Sleepy" },
        { label: "Storage", ref: "On-device", value: "142 entries" },
      ],
      note: "100% offline · No account or cloud sync required",
    },
  };

  if (dialog && dialogStamp && dialogTitle && dialogBody && dialogLink) {
    let lastTrigger = null;

    const renderPreview = (key) => {
      const data = PREVIEWS[key];
      if (!data) return;

      dialogStamp.replaceChildren();
      const numSpan = document.createElement("span");
      numSpan.className = "stamp-num";
      numSpan.textContent = data.num;
      const catSpan = document.createElement("span");
      catSpan.textContent = data.category;
      dialogStamp.append(numSpan, catSpan);

      dialogTitle.textContent = data.title;
      dialogLink.href = data.link;
      dialogLink.textContent = data.linkText;

      dialogBody.replaceChildren();

      const summaryP = document.createElement("p");
      summaryP.className = "dialog-summary";
      summaryP.textContent = data.summary;
      dialogBody.append(summaryP);

      const list = document.createElement("div");
      list.className = "lab-list";
      data.rows.forEach((row) => {
        const item = document.createElement("div");
        item.className = "lab-row";

        const l = document.createElement("span");
        l.className = "lab-name";
        l.textContent = row.label;

        const r = document.createElement("span");
        r.className = "lab-ref";
        r.textContent = row.ref;

        const v = document.createElement("span");
        v.className = "lab-val";
        v.textContent = row.value;

        item.append(l, r, v);
        list.append(item);
      });
      dialogBody.append(list);

      const footer = document.createElement("div");
      footer.className = "artifact-footer";
      const footerMain = document.createElement("span");
      footerMain.className = "artifact-footer-main";
      footerMain.textContent = data.note;
      footer.append(footerMain);
      dialogBody.append(footer);
    };

    const closeDialog = () => {
      if (dialog.open) dialog.close();
      if (lastTrigger) {
        lastTrigger.focus();
        lastTrigger = null;
      }
    };

    document.querySelectorAll("[data-preview]").forEach((btn) => {
      btn.addEventListener("click", () => {
        lastTrigger = btn;
        renderPreview(btn.getAttribute("data-preview"));
        dialog.showModal();
      });
    });

    if (dialogClose) dialogClose.addEventListener("click", closeDialog);
    if (dialogDismiss) dialogDismiss.addEventListener("click", closeDialog);

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDialog();
    });
  }

  /* =========================================================
     5. App Showcase Interactive Gallery & Lightbox
     ========================================================= */
  document.querySelectorAll("[data-gallery]").forEach((gallery) => {
    const gTabs = [...gallery.querySelectorAll("[data-gallery-tab]")];
    const gScreens = [...gallery.querySelectorAll("[data-gallery-screen]")];
    const gPrev = gallery.querySelector("[data-gallery-prev]");
    const gNext = gallery.querySelector("[data-gallery-next]");
    const gCounter = gallery.querySelector("[data-gallery-counter]");
    const gExpand = gallery.querySelector("[data-gallery-expand]");

    const lightbox = document.getElementById("gallery-lightbox");
    const lbTitle = document.getElementById("lightbox-title");
    const lbStamp = document.getElementById("lightbox-stamp");
    const lbBody = document.getElementById("lightbox-body");
    const lbClose = document.getElementById("lightbox-close");
    const lbDismiss = document.getElementById("lightbox-dismiss");

    if (!gTabs.length || gScreens.length !== gTabs.length) return;

    let current = 0;

    const showScreen = (idx, focusTab = false) => {
      current = (idx + gTabs.length) % gTabs.length;

      gTabs.forEach((tab, i) => {
        const active = i === current;
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
      });

      gScreens.forEach((screen, i) => {
        screen.hidden = i !== current;
      });

      if (gCounter) {
        gCounter.textContent = `${String(current + 1).padStart(2, "0")} / ${String(gTabs.length).padStart(2, "0")}`;
      }

      if (focusTab) {
        gTabs[current].focus();
      }
    };

    gTabs.forEach((tab, i) => {
      tab.addEventListener("click", () => showScreen(i));
      tab.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          showScreen(i + 1, true);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          showScreen(i - 1, true);
        }
      });
    });

    if (gPrev) gPrev.addEventListener("click", () => showScreen(current - 1));
    if (gNext) gNext.addEventListener("click", () => showScreen(current + 1));

    if (gExpand && lightbox && lbTitle && lbStamp && lbBody) {
      let lastExpand = null;

      const closeLightbox = () => {
        if (lightbox.open) lightbox.close();
        if (lastExpand) {
          lastExpand.focus();
          lastExpand = null;
        }
      };

      gExpand.addEventListener("click", () => {
        const screen = gScreens[current];
        if (!screen) return;
        lastExpand = gExpand;

        const title = screen.getAttribute("data-title") || "Preview";
        const num = String(current + 1).padStart(2, "0");

        lbStamp.replaceChildren();
        const sNum = document.createElement("span");
        sNum.className = "stamp-num";
        sNum.textContent = `№ ${num}`;
        const sText = document.createElement("span");
        sText.textContent = `Screen ${num} of ${String(gScreens.length).padStart(2, "0")}`;
        lbStamp.append(sNum, sText);

        lbTitle.textContent = title;
        lbBody.replaceChildren();

        const img = screen.querySelector(".gallery-photo-frame img");
        if (img) {
          const wrap = document.createElement("div");
          wrap.className = "lightbox-frame";
          const cloneImg = img.cloneNode(true);
          wrap.append(cloneImg);
          lbBody.append(wrap);
          const desc = screen.querySelector(".gallery-screen-desc");
          if (desc) {
            const p = document.createElement("p");
            p.className = "dialog-summary";
            p.textContent = desc.textContent;
            lbBody.append(p);
          }
        } else {
          const card = screen.querySelector(".phone-card");
          if (card) {
            lbBody.append(card.cloneNode(true));
          }
        }

        lightbox.showModal();
      });

      if (lbClose) lbClose.addEventListener("click", closeLightbox);
      if (lbDismiss) lbDismiss.addEventListener("click", closeLightbox);
      lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) closeLightbox();
      });
    }

    showScreen(0);
  });

  /* =========================================================
     6. Contact Email Copy & Form Handler
     ========================================================= */
  const copyBtn = document.getElementById("copy-email");
  const emailValue = document.getElementById("studio-email");

  if (copyBtn && emailValue) {
    copyBtn.addEventListener("click", async () => {
      const email = emailValue.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.append(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      copyBtn.textContent = "Copied";
      setTimeout(() => {
        copyBtn.textContent = "Copy";
      }, 2000);
    });
  }

  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const name = (document.getElementById("contact-name")?.value || "").trim();
      const email = (document.getElementById("contact-email")?.value || "").trim();
      const message = (document.getElementById("contact-message")?.value || "").trim();

      const subject = encodeURIComponent(`Studio inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const mailto = `mailto:limanexsoftware@outlook.com?subject=${subject}&body=${body}`;

      formStatus.replaceChildren();
      const text = document.createTextNode(
        `Prepared your message for limanexsoftware@outlook.com. Click `,
      );
      const link = document.createElement("a");
      link.href = mailto;
      link.textContent = "open in your email app";
      const end = document.createTextNode(" to send directly, or email us anytime.");
      formStatus.append(text, link, end);
      formStatus.hidden = false;
    });
  }
})();
