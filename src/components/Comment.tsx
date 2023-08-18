
import Reply from '../assets/icons/icon-reply.svg';
import Profile from '../assets/images/image-amyrobson.webp';

const Comment = () => {
  return (
    <article className="comment">
      <section className="counter">
        <button>+</button>
        <span>12</span>
        <button>-</button>
      </section>
      <section className="header">
        <div className="details">
          <img width={'25px'} src={Profile} alt="profile" />
          <div className="detail__user">Amyrobson</div>
          <div className="detail__date">1 month ago</div>
        </div>
        <div className="reply">
          <img src={Reply} alt="" /> 
          <span>Reply</span>
        </div>
        <p className="content">
          Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dolores? Odit alias vel cum, ab quo perspiciatis veritatis! Deserunt, possimus culpa nemo ex sunt mollitia aut labore minima sit error!
        </p>
      </section>
    </article>
  )
}

export default Comment