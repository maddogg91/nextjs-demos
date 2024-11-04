import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { Button } from "react-bootstrap";
import {inter, lusitana} from "@/app/ui/fonts";
import Image from 'next/image';


export default function Page() {
  return (

      <main className="flex min-h-screen flex-col p-6">
          <div className={styles.topbackdrop}>
              <div id="some-element"></div>

              <Image
                  id="backdrop"
                  src="/backdrop1.png"
                  width={1000}
                  height={760}
              />

              <div className={styles.backdroptitle}>Maddogg Software </div>
              <div className="backdropsubtitle">Our aim is to put the power of a software developer into the hands of
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
                  width={1000}
                  height={760}
              />

          </div>
          <div id="bg">

              <div className={}>

                  <div className="left-pane">
                      <div className="top ad">
                          <h5>Integrate Web Apps to increase productivity</h5>
                          <Image
                              alt="Web applications for small business owners"
                              id="ad1"
                              className="ad-img"
                              src="/HOME.gif"
                              width={1000}
                              height={760}
                          />
                      </div>
                      <div className="ad">
                          <h5>Upgrade your business with a high quality website</h5>
                          <Image
                              className="ad-img"
                              src="/web.png"
                              width={1000}
                              height={760}
                          />
                      </div>
                  </div>
                  <div className="center">
                      <Image
                          className="cen ad-img"
                          src="/options.png"
                          width={1000}
                          height={760}
                      />
                      <Image
                          className="home-img"
                          src="/MdgLogo.gif"
                          width={1000}
                          height={760}
                      />
                      <a href="/register" ><Button variant="cb btn btn-dark"> Create Account</Button>
              </a>


          </div>
          <div class="right-pane">
              <div class="top ad">
                  <h5>Modernize current websites with the latest technologies</h5>
                  <Image
                      alt="Technology Trends (generative ai, animations)"
                      className="ad-img"
                      src="/tt.gif"
                      width={1000}
                      height={760}
                  />
              </div>
              <div class="ad">
                  <h5>Update static images with up-to-date animations</h5>
                  <Image
                      alt="Update animations"
                      className="long ad-img"
                      src="/bookanimate.gif"
                      width={1000}
                      height={760}
                  />
              </div>
          </div>
      </div>
          </div>
    </main>
    );
}
