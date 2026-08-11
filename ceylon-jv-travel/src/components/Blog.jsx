import { ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "./ui/SectionHeading";
import { BLOG_POSTS } from "../data/content";

export default function Blog() {
  const [ref, visible] = useReveal();

  return (
    <section className="blog" ref={ref}>
      <SectionHeading eyebrow="Travel guide" title="From the Journal" subtitle="Guides and tips for planning your Sri Lanka trip" visible={visible} />

      <div className="blog__grid">
        {BLOG_POSTS.map((post, i) => (
          <a href="#" key={post.id} className={`blog-card ${visible ? "reveal-in" : "reveal-pre"}`} style={{ transitionDelay: `${0.1 + i * 0.08}s` }}>
            <div className="blog-card__media"><img src={post.img} alt={post.title} loading="lazy" /></div>
            <div className="blog-card__body">
              <p className="blog-card__read">{post.readTime}</p>
              <h3>{post.title}</h3>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              <span className="blog-card__link">Read article <ArrowUpRight size={15} strokeWidth={1.8} /></span>
            </div>
          </a>
        ))}
      </div>

      <style>{`
        .blog { padding: 100px 5% 110px; max-width: 1320px; margin: 0 auto; }
        .blog__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 26px; }
        .blog-card { display: block; text-decoration: none; color: inherit; background: #fff; border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); transition: box-shadow 0.35s ease, transform 0.35s ease; }
        .blog-card:hover { box-shadow: var(--shadow-md); transform: translateY(-5px); }
        .blog-card__media { height: 170px; overflow: hidden; }
        .blog-card__media img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .blog-card:hover .blog-card__media img { transform: scale(1.08); }
        .blog-card__body { padding: 20px 20px 24px; }
        .blog-card__read { font-family: var(--font-utility); font-size: 11.5px; text-transform: uppercase; letter-spacing: 1px; color: var(--gold-600); margin: 0 0 10px; }
        .blog-card__body h3 { font-family: var(--font-display); font-size: 18px; line-height: 1.35; margin: 0 0 10px; color: var(--moss-900); }
        .blog-card__excerpt { font-size: 14.5px; color: var(--ink-soft); line-height: 1.55; margin: 0 0 16px; }
        .blog-card__link { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-utility); font-size: 13.5px; color: var(--moss-700); }
      `}</style>
    </section>
  );
}
