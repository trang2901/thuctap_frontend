
import Chart from 'components/chart'
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { createStyles, Table, Container, Button, Navbar, Group, Code, useMantineColorScheme, SegmentedControl, Center, Box, Badge } from '@mantine/core';
import NavbarAdmin from 'components/NavbarAdmin';
import FooterAdmin from 'components/FooterAdmin';
import HeaderAdmin from 'components/HeaderAdmin';
import Editor from 'components/Editor'
import { ListItem, List } from '@mantine/core';
const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';
const useStyles = createStyles((theme) => ({
  main: {
    position: 'relative',
    marginLeft: 400,
    // marginTop: -900
    top:-300
  },
  icon: {
    position: 'relative',
    marginLeft: 150,
    marginTop: 10,


  },
  input: {
    height: 'auto',
    paddingTop: 18,
  },
  text: {
    marginLeft: 200,
    marginTop: 70,

  },
  bnt: {
    marginLeft: 700,
    color: 'white',

  },
  label: {
    position: 'absolute',
    pointerEvents: 'none',
    color: 'red',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
  container1: {

    background: 'PowderBlue',
    // minWidth: 950,

  },
  headertable:{
    background:'LightBlue'
    
      },
      link:{
        textDecoration:'none'
      }
}));

const itemview = (item: any) => {
  return (
    <List.Item>
      {
        JSON.stringify(item)
      }
    </List.Item>
  );
}


export default function NavbarSimple() {
  const { classes } = useStyles();
  const [value, onChange] = useState(initialValue);
  const [showChild, setShowChild] = useState(false)
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    setShowChild(true)
  }, [])
  if (!showChild) {
    return null
  }
  return (
    // <div>
      <Container>
    
      <NavbarAdmin></NavbarAdmin>
      {/* <FooterAdmin></FooterAdmin> */}
      <Container className={classes.main}>
      {/* <div className={classes.main}> */}
       <Chart/>
       </Container>
      {/* </div> */}
      </Container>
    // </div>
    
  );
}