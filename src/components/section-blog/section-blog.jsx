import scss from './section-blog.module.scss';
import {img} from './img'

export const SectionBlog = () => {
    return (
      <div className={scss.blogWrapper}>
        <picture className={scss.pictureBlog}>
          <source
            srcSet={`${img.blogwebp} 1x, ${img.blogwebp2x} 2x `}
            type="image/webp"
            width="320px"
          />
          <source
            srcSet={`${img.blogjpg} 1x, ${img.blogjpg2x} 2x `}
            type="image/jpg"
            width="320px"
          />

          <img
            className={scss.pictureBlog}
            src={img.blogjpg}
            alt="blog"
            width="320px"
          />
        </picture>
        <div className={scss.post}>
          <p className={scss.post__date}> April 16 2020</p>
          <h2>Blog Post One</h2>
          <p className={scss.post__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <button type="button" className={scss.blogButton}>Read Our Blog</button>
        </div>
      </div>
    );
}