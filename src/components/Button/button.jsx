import scss from './button.module.scss'


export const Button = () => {
    return (
      <div>
        <button type="button" className={scss.button}>
          <svg
            width="9"
            height="19"
            viewBox="0 0 9 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.88555 10.0976L3.1043 14.8789C2.77383 15.2094 2.23945 15.2094 1.9125 14.8789L1.11797 14.0844C0.7875 13.7539 0.7875 13.2195 1.11797 12.8926L4.50703 9.5035L1.11797 6.11444C0.7875 5.78397 0.7875 5.2496 1.11797 4.92264L1.90898 4.12108C2.23945 3.79061 2.77383 3.79061 3.10078 4.12108L7.88203 8.90233C8.21602 9.2328 8.21602 9.76718 7.88555 10.0976Z"
              fill="white"
            />
                </svg>
               <span>Read more</span>
        </button>
      </div>
    );
}