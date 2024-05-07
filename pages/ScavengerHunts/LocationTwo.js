import styles from "@/styles/ScavengerHunts/Location.module.css"; 
import HeadArea from "@/components/HeadArea";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import MenuBack from "@/components/MenuBack";
import useSound from "use-sound";

export default function LocationTwo() {
  const router = useRouter();
  const [camera] = useSound('/sound/camera.mp3');
  const handleButtonClick = (section) => {
    camera(); 
    document.getElementById(section).style.display = "block";
  };

  return (
    <>
      <HeadArea
        title="Location 2"
      />
      <MenuBack/>
      <main className={`${styles.main}`}>
      <section className={styles.sectionBanner}>
          <h3 className={styles.headingBanner} tabIndex={10}>Location 2</h3>
          <Image
              src="/images_content/Location2_Finder.png"
              width={430}
              height={428}
              alt="camera viewfinder showing Swangard Stadium"
              className={styles.imageLocation1_1}
              tabIndex={10}
          />
          <h4 className={styles.headingWelcome} tabIndex={10}>Instructions</h4>
          <p className={styles.pText} tabIndex={10}>Take a photo of the the monument unveiled in July 2007, The Ambassador of Peace is in recognition of the 36 servicemen from BC who made the supreme sacrifice during the Korean War (1950–1953).</p>
          <div className={styles.buttons}>
            <Image
                src="/images_interface/camera_icon.svg"
                width={74}
                height={74}
                alt="design image of part of a tree"
                className={styles.iconCamera}
                onClick={() => handleButtonClick("sectionFinishedShot")}
                tabIndex={10}
            />
            <Image
                src="/images_interface/gallery_icon.svg"
                width={74}
                height={74}
                alt="design image of part of a tree"
                className={styles.iconGallery}
                tabIndex={10}
            />   
          </div>
        </section>
        <section className={styles.sectionFinishedShot} id="sectionFinishedShot">
          <h3 className={styles.headingBanner_2} tabIndex={10}>Location 2</h3>
          <Image
              src="/images_content/Location2_Finished.png"
              width={430}
              height={428}
              alt="Swangard Stadium"
              className={styles.imageLocation1_2}
              tabIndex={10}
          />
          <h4 className={styles.headingWelcome} tabIndex={10}>Great Shot!</h4>
          <p className={styles.pText} tabIndex={10}>The Korean War Memorial was donated to the City of Burnaby by the Korean Veterans Association of Canada in 2007.</p>
          <button
            onClick={() => router.push('/Quiz/QuizStart')}
            className={styles.button}
            tabIndex={10}
            >Next
          </button>
        </section>
        <div className={styles.background}></div>
      </main>
      <Navbar/>
    </>
  );
}