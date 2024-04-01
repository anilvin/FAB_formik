import { Footer, FooterTypeEnum, IconEnum } from '@genieology/gtb-ui';
import React from 'react';
import styles from './Footer.module.css';

function FooterNav() {
  return (

    <div style={{
      position: 'fixed', bottom: 0, width: '100%', zIndex: '100',
    }}
    >
      <Footer
        ssoData={{
          items: [
            {
              link: '/',
              onClick: function noRefCheck() {},
              target: '_blank',
              title: 'Branch & ATMs',
            },
            {
              onClick: function noRefCheck() {},
              title: 'Terms & Conditions',
            },
            {
              link: '/',
              onClick: function noRefCheck() {},
              target: '_blank',
              title: 'Security',
            },
          ],
          socials: [
            {
              link: '/',
              target: '_blank',
              title: IconEnum.TWITTER,
            },
            {
              link: '/',
              target: '_blank',
              title: IconEnum.FACEBOOK,
            },
            {
              link: '/',
              target: '_blank',
              title: IconEnum.LINKEDIN,
            },
            {
              link: '/',
              target: '_blank',
              title: IconEnum.INSTAGRAM,
            },
            {
              link: '/',
              target: '_blank',
              title: IconEnum.YOUTUBE,
            },
          ],
        }}
        type={FooterTypeEnum.PRIMARY}
      />
      <div className={styles.footer_copyright}>
        Copyright 2022 © First Abu Dhabi Bank PJSC - Abu Dhabi - Dubai -
        United Arab Emirates
      </div>
    </div>

  );
}

export default FooterNav;
