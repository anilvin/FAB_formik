import { Menu, SecondaryHeader } from '@genieology/gtb-ui';
import React from 'react';

function Header() {
  return (
    <div style={{ position: 'fixed' }}>
      <SecondaryHeader pageTitle="Business Banking">

        <Menu
          buttonMenu
          list={[
            {
              childs: [
                {
                  id: 0.8568993417713089,
                  onClick: function noRefCheck() {},
                  primaryTitle: 'List Item 1 Item Item Item Item',
                },
                {
                  id: 0.06232357179572512,
                  onClick: function noRefCheck() {},
                  primaryTitle: 'List Item 2',
                },
                {
                  id: 0.24189685716766607,
                  onClick: function noRefCheck() {},
                  primaryTitle: 'List Item 3',
                },
                {
                  id: 0.2647961908100185,
                  onClick: function noRefCheck() {},
                  primaryTitle: 'List Item 4',
                },
                {
                  id: 0.5759014996204279,
                  onClick: function noRefCheck() {},
                  primaryTitle: 'List Item 5',
                },
                {
                  id: 0.13028787914125428,
                  onClick: function noRefCheck() {},
                  primaryTitle: 'List Item 6',
                },
                {
                  id: 0.3346272593457007,
                  onClick: function noRefCheck() {},
                  primaryTitle: 'List Item 7',
                },
                {
                  id: 0.3145634105743087,
                  onClick: function noRefCheck() {},
                  primaryTitle: 'List Item 8',
                },
                {
                  id: 0.9778081176277238,
                  onClick: function noRefCheck() {},
                  primaryTitle: 'List Item 9',
                },
                {
                  id: 0.7545481231006632,
                  onClick: function noRefCheck() {},
                  primaryTitle: 'List Item 1012312',
                },
              ],
              id: 0.8436470275288002,
            },
          ]}
          menuStyle={{
            fontColor: 'blackGrey.800',
            fontSize: '10rem',
            hoverFontColor: 'blackGrey.800',
            //  position: 'right',
          }}
          parentWidth="auto"
        />
      </SecondaryHeader>
    </div>
  );
}

export default Header;
