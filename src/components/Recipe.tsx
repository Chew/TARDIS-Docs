import React from "react";
import styles from "../css/recipe.module.css";

function Tooltip({ name = '' }) {
    if (name === 'air' || !name) {
      return '';
    }
    if (name.startsWith('tardis')) {
        var stripped = name.substring(7);
        const formattedName = String(stripped).replaceAll('tardis:', '');
        const finalName = String(formattedName).replaceAll('-', '\xa0');
        return <div className={styles.tooltiptext}>{finalName}</div>;
    } else {
        const formattedName = String(name).replaceAll('-', '\xa0');
        return <div className={styles.tooltiptext}>{formattedName}</div>;
    }
}

function Rendermite({name}) {
    if (name == 'air') {
        return <img src={'/images/icons/air.png'} />
    } else if (name.startsWith('tardis')) {
        // strip off the tardis and return a local images/icons/
        var stripped = name.substring(7);
        return <img src={'/images/icons/' + stripped + '.png'} />
    } else {
        // grab the icon from rendermite
        var underscored = name.replaceAll('-', '_');
        return <span className={`rc-item rc-minecraft_${underscored}`} style={{ width: '24px', height: '24px' }}></span>
    }
}

export default function Recipe(icons: string[]): JSX.Element {

  icons = Object.values(icons)[0]

  return (
    <div className={styles.crafting}>
      <div className={styles.input}>
        <div className={styles.row}>
          <div className={styles.slot}>
            <Tooltip name={icons[0]} />
            <Rendermite name={icons[0]} />
          </div>
          <div className={styles.slot}>
            <Tooltip name={icons[1]} />
            <Rendermite name={icons[1]} />
          </div>
          <div className={styles.slot}>
            <Tooltip name={icons[2]} />
            <Rendermite name={icons[2]} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.slot}>
            <Tooltip name={icons[3]} />
            <Rendermite name={icons[3]} />
          </div>
          <div className={styles.slot}>
            <Tooltip name={icons[4]} />
          <Rendermite name={icons[4]} />
          </div>
          <div className={styles.slot}>
            <Tooltip name={icons[5]} />
            <Rendermite name={icons[5]} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.slot}>
            <Tooltip name={icons[6]} />
            <Rendermite name={icons[6]} />
          </div>
          <div className={styles.slot}>
            <Tooltip name={icons[7]} />
            <Rendermite name={icons[7]} />
          </div>
          <div className={styles.slot}>
            <Tooltip name={icons[8]} />
            <Rendermite name={icons[8]} />
          </div>
        </div>
      </div>
      <div className={styles.arrow}>
        <img src={"/images/icons/gui-arrow.png"} />
      </div>
      <div className={styles.output}>
        <Tooltip name={icons[9]} />
        <img src={'/images/icons/' + icons[9] + '.png'} />
      </div>
    </div>
  )

}
