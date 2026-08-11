import { useState } from "react";
import { ArrowUpRight, X, Clock, BookOpen, Share2 } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "./ui/SectionHeading";
import { BLOG_POSTS } from "../data/content";

export default function Blog() {
  const [ref, visible] = useReveal();
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section className="blog" ref={ref}>
      <SectionHeading eyebrow="Travel guide" title="From the Journal" subtitle="Guides and tips for planning your Sri Lanka trip" visible={visible} />

      <div className="blog__grid">
        {BLOG_POSTS.map((post, i) => (
          <div
            key={post.id}
            className={`blog-card ${visible ? "reveal-in" : "reveal-pre"}`}
            style={{ transitionDelay: `${0.1 + i * 0.08}s`, cursor: "pointer" }}
            onClick={() => setActiveArticle(post)}
          >
            <div className="blog-card__media"><img src={post.img} alt={post.title} loading="lazy" /></div>
            <div className="blog-card__body">
              <p className="blog-card__read">{post.readTime}</p>
              <h3>{post.title}</h3>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              <span className="blog-card__link">Read article <ArrowUpRight size={15} strokeWidth={1.8} /></span>
            </div>
          </div>
        ))}
      </div>

      {activeArticle && (
        <div className="modal-overlay" onClick={() => setActiveArticle(null)}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button className="blog-modal__close" onClick={() => setActiveArticle(null)} aria-label="Close">
              <X size={20} />
            </button>
            
            <div className="blog-modal__hero">
              <img src={activeArticle.img} alt={activeArticle.title} />
              <div className="blog-modal__scrim" />
              <div className="blog-modal__title-box">
                <span className="pill-tag pill-tag--active">{activeArticle.readTime}</span>
                <h2>{activeArticle.title}</h2>
              </div>
            </div>

            <div className="blog-modal__body">
              <p className="lead">{activeArticle.excerpt}</p>
              <hr className="divider" />
              <p className="content">{activeArticle.content}</p>
              
              <div className="blog-modal__footer">
                <button className="btn btn--outline-dark" onClick={() => setActiveArticle(null)}>Close Article</button>
                <a href="#booking" className="btn btn--primary" onClick={() => setActiveArticle(null)}>Plan This Trip</a>
              </div>
            </div>
          </div>
        </div>
      )}

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

        /* Blog Article Modal */
        .blog-modal {
          background: #fff; width: 720px; max-width: 92vw; max-height: 90vh; border-radius: var(--radius-lg);
          overflow-y: auto; position: relative; box-shadow: var(--shadow-lg); animation: slideUpModal 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .blog-modal__close {
          position: absolute; top: 16px; right: 16px; z-index: 10;
          background: rgba(0,0,0,0.5); border: none; color: #fff;
          width: 36px; height: 36px; border-radius: 50%; display: flex;
          align-items: center; justify-content: center; cursor: pointer;
        }
        .blog-modal__hero { height: 260px; position: relative; }
        .blog-modal__hero img { width: 100%; height: 100%; object-fit: cover; }
        .blog-modal__scrim { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%); }
        .blog-modal__title-box { position: absolute; bottom: 20px; left: 24px; right: 24px; color: #fff; }
        .blog-modal__title-box h2 { font-family: var(--font-display); font-size: 26px; margin: 8px 0 0; color: #FBF9F2; }
        .blog-modal__body { padding: 30px; }
        .blog-modal__body .lead { font-family: var(--font-display); font-size: 19px; line-height: 1.6; color: var(--moss-900); margin: 0 0 16px; }
        .blog-modal__body .divider { border: none; border-top: 1px solid var(--moss-100); margin: 20px 0; }
        .blog-modal__body .content { font-size: 16px; line-height: 1.7; color: var(--ink-soft); }
        .blog-modal__footer { display: flex; justify-content: space-between; margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--cream-deep); }
      `}</style>
    </section>
  );
}

