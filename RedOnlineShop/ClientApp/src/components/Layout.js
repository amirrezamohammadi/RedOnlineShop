import React from 'react';
import { Container } from 'reactstrap';

import { NavMenu } from './NavMenu';

const Layout =({children})=> {
  
  
    return (
      <div>
        <NavMenu />
        <Container fluid className='p-0'>
          {children}
        </Container>
      </div>
    );
  }

  export {Layout}