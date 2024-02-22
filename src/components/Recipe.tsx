import React from "react";
import styles from "../css/recipe.module.css";

export default function Recipe(icons: string[]): JSX.Element {

  icons = Object.values(icons)[0]
  console.log(icons[0])

  return (
    <div className={styles.crafting}>
      <div className={styles.input}>
        <div className={styles.row}>
          <div className={styles.slot}>
            <img src={'/images/icons/' + icons[0] + '.png'} />
          </div>
          <div className={styles.slot}>
          <img src={'/images/icons/' + icons[1] + '.png'} />
          </div>
          <div className={styles.slot}>
          <img src={'/images/icons/' + icons[2] + '.png'} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.slot}>
          <img src={'/images/icons/' + icons[3] + '.png'} />
          </div>
          <div className={styles.slot}>
          <img src={'/images/icons/' + icons[4] + '.png'} />
          </div>
          <div className={styles.slot}>
          <img src={'/images/icons/' + icons[5] + '.png'} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.slot}>
          <img src={'/images/icons/' + icons[6] + '.png'} />
          </div>
          <div className={styles.slot}>
          <img src={'/images/icons/' + icons[7] + '.png'} />
          </div>
          <div className={styles.slot}>
          <img src={'/images/icons/' + icons[8] + '.png'} />
          </div>
        </div>
      </div>
      <div className={styles.arrow}>
        <img src={"/images/icons/Arrow.png"} />
      </div>
      <div className={styles.output}>
          <img src={'/images/icons/' + icons[9] + '.png'} />
      </div>
    </div>
  )

}
