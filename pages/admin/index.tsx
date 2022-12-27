import React, { useState, useEffect } from 'react';
import { createStyles, Button, Navbar, Group, Code, useMantineColorScheme, SegmentedControl, Center, Box, Badge } from '@mantine/core';
import NavbarAdmin from 'components/NavbarAdmin';
import FooterAdmin from 'components/FooterAdmin';
import HeaderAdmin from 'components/HeaderAdmin';
import Layout from "../../layouts";
const useStyles = createStyles((theme) => ({
  main: {
    position: 'relative',
    marginLeft: 400,
    marginTop: -900
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

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    color: 'red',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
  container: {

  }
}));

AdminSimple.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">
    {page}
  </Layout>;
};

export default function AdminSimple() {
  const { classes } = useStyles();
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])
  if (!showChild) {
    return null
  }

  return (
    <div>
      <div>
        <p className={classes.text}>
          <Badge color="cyan">
            Hello, Ở đây có CV ngon hơn người yêu cũ của bạn
          </Badge>
        </p>
      </div>
      <img src="/icon_tuyen_dung.png" className={classes.icon} alt="" width={350} height={350} />
    </div>

  );
}

