import { Box, TextField } from '@mui/material';

export default function RegistrationForm({ isLoginType = true }) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, fullWidth: true },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="text-md w-full">
                <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue=""
                    size="small"
                />
                <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Password"
                    defaultValue=""
                    size="small"
                />
            </div>
            <div className="flex justify-center pt-3">
                <button className="rounded-full hover:border-orange-400 hover:text-orange-400 text-white w-full bg-blue-600 py-2 px-5 border shadow hover:bg-white">{isLoginType ? 'Login' : 'Sign up'}</button>
            </div>
            {!isLoginType &&
                <div className="flex text-xs pt-4 justify-center">
                    <div className="text-gray-500">Already a member? &nbsp;</div>
                    <div className="hover:text-blue-500"><a href="/login">Login here &rarr;</a></div>
                </div>
            }
            {isLoginType &&
                <div className="flex text-xs pt-4 justify-center">
                    <div className="text-gray-500">Not a member? &nbsp;</div>
                    <div className="hover:text-blue-500"><a href="/">Register here &rarr;</a></div>
                </div>
            }

        </Box>
    );
}