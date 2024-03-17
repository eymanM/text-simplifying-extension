import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#000000',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg width="61" height="49" viewBox="0 0 61 49" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.0201416" y="8.48926" width="52" height="32" rx="16" fill="#16425A"/><rect x="16.0201" y="4.48926" width="40" height="40" rx="20" fill="#0D2430" fill-opacity="0.08"/><rect x="24.0201" y="12.4893" width="24" height="24" rx="12" fill="#F7F6F4"/><path d="M34.0201 27.2692L31.2401 24.4892L30.2935 25.4292L34.0201 29.1558L42.0201 21.1558L41.0801 20.2158L34.0201 27.2692Z" fill="#FFF"/></svg>')`,
            },


            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg width="61" height="49" viewBox="0 0 61 49" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.0201416" y="8.48926" width="52" height="32" rx="16" fill="#16425A"/><rect x="16.0201" y="4.48926" width="40" height="40" rx="20" fill="#0D2430" fill-opacity="0.08"/><rect x="24.0201" y="12.4893" width="24" height="24" rx="12" fill="#F7F6F4"/><path d="M34.0201 27.2692L31.2401 24.4892L30.2935 25.4292L34.0201 29.1558L42.0201 21.1558L41.0801 20.2158L34.0201 27.2692Z" fill="#FFF"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

// const Android12Switch = styled(Switch)(({ theme }) => ({
//     padding: 8,
//     '& .MuiSwitch-track': {
//         borderRadius: 22 / 2,
//         '&::before, &::after': {
//             content: '""',
//             position: 'absolute',
//             top: '50%',
//             transform: 'translateY(-50%)',
//             width: 16,
//             height: 16,
//             color: 'black' // This will set the color of the pseudo-elements
//         },
//         '&::before': {
//             backgroundImage: `url('data:image/svg+xml;utf8,<svg width="61" height="49" viewBox="0 0 61 49" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect x="9.02014" y="9.48926" width="50" height="30" rx="15" fill="#F2F2F2"/>
// <rect x="9.02014" y="9.48926" width="50" height="30" rx="15" stroke="#6D777D" stroke-width="2"/>
// <rect x="4.02014" y="4.48926" width="40" height="40" rx="20" fill="#0D2430" fill-opacity="0.08"/>
// <rect x="10.0201" y="10.4893" width="28" height="28" rx="14" fill="#0D2430"/>
// <path d="M28.6868 20.7628L27.7468 19.8228L24.0201 23.5494L20.2935 19.8228L19.3535 20.7628L23.0801 24.4894L19.3535 28.2161L20.2935 29.1561L24.0201 25.4294L27.7468 29.1561L28.6868 28.2161L24.9601 24.4894L28.6868 20.7628Z" fill="#F2F2F2"/>
// </svg>
// ')`,
//             left: 12,
//         },
//         '&::after': {
//             backgroundImage: `url('data:image/svg+xml;utf8,<svg width="61" height="49" viewBox="0 0 61 49" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect x="0.0201416" y="8.48926" width="52" height="32" rx="16" fill="#16425A"/>
// <rect x="16.0201" y="4.48926" width="40" height="40" rx="20" fill="#0D2430" fill-opacity="0.08"/>
// <rect x="24.0201" y="12.4893" width="24" height="24" rx="12" fill="#F7F6F4"/>
// <path d="M34.0201 27.2692L31.2401 24.4892L30.2935 25.4292L34.0201 29.1558L42.0201 21.1558L41.0801 20.2158L34.0201 27.2692Z" fill="#0D2430"/>
// </svg>
// ')`,
//             right: 12,
//         },
//     },
//     '& .MuiSwitch-thumb': {
//         boxShadow: 'none',
//         width: 16,
//         height: 16,
//         margin: 2,
//     },
//     '& p': {
//         color: 'black' // This will set the color of the paragraph
//     }
// }));



export default function CustomizedSwitches() {

    return (
        <FormGroup sx={{
            width: '100vw'
        }}>
            <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked /> }
                labelPlacement={'start'}
                label={
                    <Typography sx={{ color: 'black', display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', marginRight: '1rem' }} >
                        <strong>Bi</strong>onic&nbsp;<strong>Fo</strong>nt
                    </Typography>
                }
                sx={{
                    color: 'black',
                    justifyContent: 'space-between'
                }}
            />
            <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                labelPlacement={'start'}
                label={
                    <Typography sx={{ color: 'black', display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem' }}>
                        <strong>Open dyslexic</strong>
                    </Typography>
                }
                sx={{
                    color: 'black',
                    justifyContent: 'space-between'
                }}
            />
            <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                labelPlacement={'start'}
                label={
                    <Typography sx={{ color: 'black', display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem' }}>
                        Text to speach
                    </Typography>
                }
                sx={{
                    color: 'black',
                    justifyContent: 'space-between'
                }}
            />
        </FormGroup>
    );
}