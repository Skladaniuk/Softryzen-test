import scss from "./section-callback.module.scss";
import { img } from "./img";

export const SectionCallback = () => {
  return (
    <div className={scss.sectionCallback}>
      <div>
        <picture>
          <source
            srcSet={`${img.contactwebp} 1x, ${img.contact2xwebp} 2x `}
            type="image/webp"
            width="320px"
          />
          <source
            srcSet={`${img.contactjpg} 1x, ${img.contact2xjpg} 2x `}
            type="image/jpg"
            width="320px"
          />

          <img src={img.contactjpg} alt="contact" width="320px" />
        </picture>
      </div>
      <div className={scss.callbackWrapper}>
        <form
          name="callback"
          method="post"
                 
                  
        >
          <input type="hidden" name="form-name" value="callback" />
          <div>
            <label>
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              <input type="email" name="email" />
            </label>
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
