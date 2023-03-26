import React from "react";

import Album1 from "./Album 1.png";
import Album2 from "./Album 2.png";
import Album3 from "./Album 3.png";
import Album4 from "./Album 4.png";
import classes from "./MusicForm.module.css";

const MusicForm = () => {
  return (
    <>
      <p className={classes.album1}>Album 1</p>
      <img src={Album1} alt="Album 1" className={classes.img} />
      <p className={classes.price}>
        $12.99 <button className={classes.button}>ADD TO CART</button>
      </p>

      <p className={classes.album2}>Album 2</p>
      <img src={Album2} alt="Album 2" className={classes.img2} />
      <p className={classes.price2}>
        $12.99 <button className={classes.button}>ADD TO CART</button>
      </p>

      <p className={classes.album3}>Album 3</p>
      <img src={Album3} alt="Album 3" className={classes.img3} />
      <p className={classes.price3}>
        $12.99 <button className={classes.button}>ADD TO CART</button>
      </p>

      <p className={classes.album4}>Album 4</p>
      <img src={Album4} alt="Album 4" className={classes.img4} />
      <p className={classes.price4}>
        $12.99 <button className={classes.button}>ADD TO CART</button>
      </p>
    </>
  );
};
export default MusicForm;
