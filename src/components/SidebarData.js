import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as VscIcons from 'react-icons/vsc';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Overview',
    path: '/overview',
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: 'Discussions',
    path: '/discussions',
    icon: <RiIcons.RiDiscussLine />,
  },
  {
    title: 'Known References',
    path: '/references',
    icon: <VscIcons.VscReferences />,
  },
  {
    title: 'Legal Terms',
    path: '/legal-terms',
    icon: <VscIcons.VscLaw />,
  }
];