import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';
import OffCanvas from './OffCanvas/index.js';
import Footer from './Footer/index.js';
import './index.css';

const Main = (props) => {
  return (
    <main>
      <Grid>
        <OffCanvas jumbotron={props.jumbotron} />
        <Footer
          company={props.company}
        />
      </Grid>
    </main>
  );
};

export default Main;

Main.propTypes = {
  company: PropTypes.string.isRequired,
  jumbotron: PropTypes.object.isRequired
};
