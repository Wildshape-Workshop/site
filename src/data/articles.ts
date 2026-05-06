export type Article = {
  slug: string;
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "joinery-without-jig",
    date: "April 22, 2026",
    tag: "Woodworking",
    title: "Joinery without the jig: hand-cut dovetails on commission",
    excerpt:
      "Three weeks, a single commission, and a lesson in why the hand plane still matters. Here is how the joint came together — and why we refused to use a router.",
    content: [
      "The client asked for a jewellery box. Walnut. Dovetailed corners. No visible fasteners. Nothing unusual about the request — except they wanted to watch it being made.",
      "That meant hand tools. A router screams. A table saw kicks dust. But a chisel and a hand plane? Those you can talk over. So we cleared the bench, pulled out the dovetail saw, and got to work.",
      "Dovetails are a test. Not of whether you can cut them — anyone with patience can learn that — but of whether you understand why they matter. Machine-cut joints hide in sameness. Hand-cut joints show intent. The walls flare slightly. The baseline drifts. The wood remembers the blade.",
      "We marked the tails first, scribed with a knife, and cut to the waste side. Chiseled out the spaces. Traced the tails onto the pins. Cut those freehand. The first dry fit was tight — almost too tight. Walnut is unforgiving. Tearout would ruin it.",
      "Three weeks of evenings. Planing, fitting, scraping, oiling. The client came by twice to watch. Didn't say much. Just watched the shavings curl and pile on the floor. When we handed it over, they ran a finger down the joint and said it felt honest. That is what we are after.",
    ],
  },
  {
    slug: "cutting-font-11",
    date: "March 14, 2026",
    tag: "Laser Cutting",
    title: "Cutting a font at 1:1 — when typography becomes material",
    excerpt:
      "We were asked to reproduce a client logotype in 6mm birch ply. What started as a straightforward job became a meditation on what letterforms can physically bear.",
    content: [
      "A design studio sent us a logotype. Their client wanted it as a physical object — signage for an office entrance. 6mm birch plywood. Twelve letters. Cut and finished, ready to mount.",
      "The typeface was sharp. Thin stems, tight counters, aggressive serifs. Built for print, not fabrication. We warned them: birch plywood has limits. Those hairline strokes would snap under their own weight. They said try it anyway.",
      "First pass: we scaled the letters to 150mm cap height and sent the file to the laser. The K broke during the cut. The R's leg fell off when we lifted it from the bed. The A's crossbar sagged. Plywood flexes. Fonts do not care.",
      "We spent two days rebuilding the outlines. Thickened every stroke under 3mm. Reinforced the serifs. Added internal supports to the B, P, and R. It stopped looking like the original typeface. It started looking like something that could survive.",
      "The studio pushed back. We sent photos of the broken letters. They revised the design. We cut it again. This time everything held. It looked different — heavier, more deliberate. But it worked. That is the gap between a design and an object. We live in that gap.",
    ],
  },
  {
    slug: "tolerances-time-prototype",
    date: "February 3, 2026",
    tag: "3D Printing",
    title: "Tolerances, time, and the first working prototype",
    excerpt:
      "From digital model to functional mechanism in under 48 hours. How PETG solved a problem that solid timber simply could not.",
    content: [
      "A local engineer needed a prototype. Mechanical part, rotating assembly, had to fit inside an existing housing. Timber was too stiff. Machining aluminum would take a week. 3D printing could do it in 48 hours.",
      "The CAD file came over on a Tuesday. We reviewed the tolerances — 0.2mm clearance on the bearing surfaces, snap-fit clips on the housing. Tight, but printable. We loaded PETG and started the print.",
      "PETG is tougher than PLA, less brittle, handles flex without snapping. It also warps if the bed is not level and strings if the temperature drifts. Eighteen hours later, the part came off the bed clean. We test-fit it in the housing. Too tight.",
      "Reprinted with 0.3mm clearance. Better, but the clips would not snap. Too much resistance. Third attempt: we split the model into two parts, printed them separately, and joined them with solvent. Fit perfectly. Clips engaged. Bearing rotated smooth.",
      "The engineer picked it up on Thursday. Tested it in the assembly. Worked. Ordered five more for client demos. Total cost: €47 in filament and two days of iteration. That is what 3D printing does well — not perfection, but fast enough to learn from failure.",
    ],
  },
  {
    slug: "workshop-tools-2026",
    date: "January 15, 2026",
    tag: "Woodworking",
    title: "The workshop audit: what stayed, what went, what we wish we had",
    excerpt:
      "An honest inventory of every tool in the shop. Some earn their place on the bench. Others gather dust. Here is what made the cut after seven years.",
    content: [
      "Every January we audit the workshop. Tool by tool, drawer by drawer. If it has not earned its keep in twelve months it goes — sold, given away, or scrapped.",
      "This year we lost the benchtop bandsaw. It was always too small for the work, and the table saw plus a jigsaw covered everything it could do. It went to a friend who needed one for a project.",
      "The chisels stayed. The chisels always stay. A dull chisel is a sharp chisel waiting for a stone — they never stop being useful. We added two new sizes from a maker in Germany. Slow steel, hard edges, takes a polish you can read in.",
      "The wishlist for next year: a thicknesser. We have been hand-planing rough stock for too long. The arms can take it; the schedule cannot. And a proper dust extractor. The shop vac is fine until it is not.",
    ],
  },
  {
    slug: "finishing-problem",
    date: "December 8, 2025",
    tag: "Woodworking",
    title: "The finishing problem: oil, wax, or something in between",
    excerpt:
      "Every piece needs a finish. But which one? We tested six methods on the same timber to see what holds up in real conditions.",
    content: [
      "Six finishes, one piece of oak, one year of testing. Tung oil, Danish oil, hardwax oil, beeswax, shellac, and a water-based polyurethane. All applied to the same board, all left in the same room.",
      "Tung oil deepened the grain the most. Hardwax oil held up best to spills. Shellac scratched. Polyurethane looked plastic. Beeswax wore off within months on anything you actually used.",
      "For furniture that gets used daily we landed on hardwax oil. For decorative work, tung. Beeswax is for the unboxing experience and nothing else. Shellac stays in the cabinet for restoration jobs.",
    ],
  },
  {
    slug: "resin-printing-mess",
    date: "November 20, 2025",
    tag: "3D Printing",
    title: "Why resin printing is worth the mess",
    excerpt:
      "Resin smells bad, ruins gloves, and needs ventilation. But the detail is unmatched. Here is when we reach for it — and when we do not.",
    content: [
      "Resin printing is the worst kind of fun. The vat smells like a hospital. The gloves need replacing every job. The wash station takes up bench space we cannot afford. And yet.",
      "Detail you cannot get from FDM. Surface finish that does not need sanding. Tolerances tight enough to print working threads at M3. For small parts where the geometry matters more than the material, resin wins.",
      "We use it for prototypes that need to look final. Master patterns for casting. Architectural models with fine detail. Anything functional and load-bearing goes back to FDM in PETG or PLA+. Know when to reach for which.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
