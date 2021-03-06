import { Languages } from './@types';

export const colors = {
    mainBlue: 'dodgerblue',
    mainGreen: '#3ca56e',
    backgroundDark: '#282c34',
    backgroundBlue: '#2d3e5d',
    backgroundSuperDark: '#1d2129',
    backgroundDarkTranslucent: 'rgba(40,44,52, 0.7)'
};

export const CONTEXT_DEFAULT = {
    status: 'disconnected',
    containerName: '',
    id: '',
    activityId: '',
    response: {
        readData: {},
        metaData: { saveInfo: {} },
        writeData: { output: 'Output' }
    },
    socket: ''
};

export const fonts = {
    display: "'Arvo', serif",
    body: "'Cantarell', sans-serif"
};

export const languageOptions: { value: string; label: string }[] = [
    { value: Languages.JS, label: 'JavaScript' },
    { value: Languages.PYTHON, label: 'Python' },
    { value: Languages.C, label: 'C/C++' }
];

export const DOMAIN = `https://midgard.codexe.run`;
