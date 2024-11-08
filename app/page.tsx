import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
//import NavFunction from "@/app/Navbar";
import {inter, lusitana} from "@/app/ui/fonts";
import Image from 'next/image';
import MdgNavbar from "@/app/MdgNavbar";
import React from "react";


export default function Page() {
  return (

      <main className="flex min-h-screen flex-col p-6">
          <MdgNavbar></MdgNavbar>
          <div className={styles.topbackdrop}>
              <Image
                  id="backdrop"
                  src="/backdrop1.png"
                  alt={"Maddogg Software Backdrop with code in the background"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
              />

              <div className={styles.backdroptitle}>Maddogg Software</div>
              <div className={styles.backdropsubtitle}>Our aim is to put the power of a software developer into the hands of
                  consumers.
                  Contact one of our experts to find out how we can build a solution for your business.
              </div>
              <a href="/contact">
                  <button type="button" className={styles.btnbackdrop}>Learn More</button>
              </a>
          </div>
          <div>
              <Image
                  id="mobilewwd"
                  src="/wwd.png"
                  alt={"Maddogg Software Backdrop with code in the background"}
                  width={0}
                  height={0}
                  style={{ width: '100%', height: 'auto' }}
                  sizes="100vw"
              />

          </div>
          <div id="bg">

              <div className="container">

                  <div className={styles.leftPane}>
                      <div className={styles.top + ' ' + styles.ad}>
                          <h5>Integrate Web Apps to increase productivity</h5>
                          <Image
                              alt="Web applications for small business owners"
                              id="ad1"
                              className={styles.adImg}
                              src="/HOME.gif"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: '100%', height: 'auto' }}
                          />
                      </div>
                      <div className={styles.ad}>
                          <h5>Upgrade your business with a high quality website</h5>
                          <Image
                              className={styles.adImg}
                              src="/web.png"
                              alt={"Showing some work that the development team has completed"}
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: '100%', height: 'auto' }}
                          />

                      </div>
                  </div>
                  <div className={styles.center}>
                      <Image
                          className={styles.cen + " " + styles.adImg}
                          src="/options.png"
                          alt={"Maddogg Software options to choose from"}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: '80%', height: 'auto' }}
                      />
                      <Image
                          className={styles.homeImg}
                          src="/MdgLogo.gif"
                          alt={"Maddogg Software Logo animated"}
                          width={0}
                          height={0}
                          sizes="100vw"

                      />
                      <a href="/register"><button className={styles.cb+ " btn btn-dark"}> Create Account</button>
                      </a>


                  </div>
                  <div className={styles.rightPane}>
                      <div className={styles.top + " " + styles.ad}>
                          <h5>Modernize current websites with the latest technologies</h5>
                          <Image
                              alt="Technology Trends (generative ai, animations)"
                              className={styles.adImg}
                              src="/tt.gif"
                              width={0}
                              height={0}
                              style={{ width: '100%', height: 'auto' }}
                          />
                      </div>
                      <div className={styles.ad}>
                          <h5>Update static images with up-to-date animations</h5>
                          <Image
                              alt="Update animations"
                              className={styles.long + " " + styles.adImg}
                              src="/bookanimate.gif"
                              width={0}
                              height={0}
                          />
                      </div>
                  </div>
              </div>
          </div>
      </main>
  );
}
