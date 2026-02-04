const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


const artworks = {
  paint: {
    title: "6PM ON A SATURDAY NIGHT",
    meta: "Paintings, Acrylic on Birch",
    img: "assets/icons/paint.png",
    body:
      "A series of three paintings—an open field from Windows XP, a frozen loading bar, and a blue screen of error capture a quiet, transitional era in digital culture. They are soft windows into a time when technology moved slower, when waiting was part of the experience, and when even stillness had depth. Before constant connectivity, computers held a kind of suspense where time stretched, stalled, or simply disappeared. Today, our interactions with technology are faster, louder, and more demanding, defined by endless scrolls and instant feedback. These paintings look back at a moment before that acceleration, when slowness wasn’t yet a flaw, and attention wasn’t yet fragmented across tabs, feeds, and notifications. They invite us to reconsider the value of pause in a world where digital time rarely stands still."
  },
  picture: {
    title: "BRYCE, 3D WEAVE",
    meta: "3D Software, Industrial loom",
    img: "assets/icons/picture.png",
    body:
      "Bryce 3D Weave interlaces two distinct forms of obsolescence: the programmed labour of industrial textile production and the decay of digital tools. At first glance, the work appears as a mechanical weave, repetitive, architectural, produced by automated processes. But embedded in its pattern is a 3D landscape, synthetic terrain rendered using Bryce 3D. a once-revolutionary software now all but unusable on modern machines. The image itself is the result of digital excavation. To create it, we reconstructed a full late-90’s computing environment by sourcing discontinued hardware, legacy operating systems, and long-abandoned software stacks. The rendering process was fragile, glitch-ridden, and methodical mirroring the logic of the industrial loom, which operates with precision yet depends on strict, outdated instructions."
  },
  doc: {
    title: "ADVISE HERE",
    meta: "Light Sculpture",
    img: "assets/icons/doc-eye.png",
    body:
      "Advertise Here is an installation composed of a rolling LED sign and display hardware. The LED loops outdated messages such as “internet café open 24/7”, echoing the visual language of early 2000’s digital signage. These texts once marked access to public connectivity, cheap services, and 24-hour availability are now largely displaced by smartphones, cloud platforms, and always-on networks. The installation doesn’t parody or remix these messages — it preserves them. In doing so, it highlights the afterlife of commercial infrastructure: systems still technically functional, but culturally and economically redundant. The screens still glow, but the services they once advertised no longer hold relevance."
  },
  recycle: {
    title: "RECYCLE BIN (SOLID STATE)",
    meta: "Sculpture · Cast Concrete",
    img: "assets/icons/recycle-bin.png",
    body:
      "This concrete sculpture renders a relic of the desktop era the Recycle Bin, a once-familiar icon of deletion and discard into a permanent form. Cast, the ephemeral is made enduring. A user interface element designed to be invisible and temporary becomes physical, weighty, permanent. Recycle Bin (Solid State) is an artefact of layered absolescence; a fossil from the early digital age, a ghost of vanished interfaces, and a monument to systems no longer in use. Its construction in concrete, a material of brutal permanence, transforms a symbol of disposability into a sculputral paradox. What was once easily emptied, now cannot be moved."
  },
  globe: {
    title: "ETHERNET CABLE FENCE",
    meta: "Connectivity as boundary",
    img: "assets/icons/globe.png",
    body:
      "Ethernet Cable Fence reimagines the architecture of connectivity as a boundary. Tactile, tangled, and unravelling. Formed from decommissioned Ethernet cables, the familiar grid of a chain link fence emerges: not a passage, but a partition. This fence is a relic of a networked era. Repurposed infrastructure stretched into a symbol of containment. The pattern begins as clean logic: an engineered lattice mirroring the clarity and promise of digital connection. But as the cables descend, the system fails. Order buckles into a mass of knotted wire, as if the network has collapsed under its own entropy."
  },
  pc: {
    title: "ACTIVITY MONITOR",
    meta: "CRT Monitor, Python script",
    img: "assets/icons/pc.png",
    body:
      "Activity Monitor stages a ritual of care for an aging machine, transforming a refurbished CRT computer into a frail patient. Its weathered casing is pried open , while an adjacent IV stand delivers a steady crimson drip into its circuitry as an an eerie simulacrum of lifeblood that underscores the  animism we project onto our devices. ELIZA’s soft, pre-programmed replies address the computer’s faltering “memories” and laboured responses, each stutter and ellipsis exposing the hollowness of algorithmic empathy. The computer has its own opinion albeit it being outdated."
  },
  cmd: {
    title: "SUDO KILL",
    meta: "LCD Screens, Computer towers",
    img: "assets/icons/cmd.png",
    body:
      "sudo kill reflects the constant push-pull of living inside digital systems that promise ease but deliver overwhelm. A series of oriented LCD monitors and computer towers display reactive visuals, glitches, loops, dead ends, and half-loaded interfaces generated live using embedded computing. The aesthetic is familiar but unstable: pop-up logic without context, UI fragments without function, infinite scrolls that go nowhere. The moment just before a system is forcefully shut down and a visual equivalent of typing sudo kill into the terminal. Visitors trigger and alter these visuals simply by moving through the space. But control is partial, gestures are misread, feedback is delayed, the system acts on its own terms. This is not interaction as agency: it’s interaction as instability."
  },
  redx: {
    title: "MY PERSONAL GRAVEYARD",
    meta: "Disassembled PC components, Perspex, Soil, Live face-tracking system",
    img: "assets/icons/red-x.png",
    body:
      "My Personal Graveyard is a sculptural installation composed of dissected computer hardware encased between two slabs of clear Perspex, forming a tombstone-like structure. Resting on a bed of soil, the piece draws a direct line between technological obsolescence and human mortality, a shared endpoint shaped by systems of decay. An old PC display embedded within the structure is activated by a face-tracking camera. When a viewer approaches, their face appears faintly within the screen, overlaid atop the internal remains of the machine. The interaction is minimal but intimate, the living body temporarily reflected within a dead system."
  }
};
  
  function openModal(data){
    const modal = document.querySelector("#modal");
    modal.classList.add("open");
  
    document.querySelector("#modalImg").src = data.img;
    document.querySelector("#modalTitle").textContent = data.title;
    document.querySelector("#modalMeta").textContent = data.meta;
    document.querySelector("#modalBody").textContent = data.body;
  }
  
  function closeModal(){
    document.querySelector("#modal").classList.remove("open");
  }
  
  document.addEventListener("click", (e) => {
    // open
    const btn = e.target.closest("[data-artwork]");
    if(btn){
      const key = btn.getAttribute("data-artwork");
      if(artworks[key]) openModal(artworks[key]);
    }
  
    // close
    if(e.target.closest("[data-close]")) closeModal();
    if(e.target.id === "modal") closeModal();
  });
  
  // escape key closes
  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") closeModal();
  });
 