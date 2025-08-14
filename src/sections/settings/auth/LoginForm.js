import React, { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from '../../../components/hook-form/FormProvider';
import RHFTextField from '../../../components/hook-form/RHFTextField';
import { Alert, Button, IconButton, InputAdornment, Link, Stack } from '@mui/material';
import { Eye, EyeSlash } from 'phosphor-react';
import { Link as RouterLink } from "react-router-dom"

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const LoginSchema = yup.object().shape({
        email: yup.string().required("Email is required").email("Email must be a valid email address"),
        password: yup.string().required("Password is required")
    });

    const defaultValues = {
        email: "demo@tawk.com",
        password: "demo1234"
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods;

    const onSubmit = async (data) => {
        try {
            // submit data to backend 
        } catch (error) {
            console.log(error);
            reset();
            setError("afterSubmit", {
                ...error,
                message: error.message,
            });
        }
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                {!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}
                <RHFTextField name="email" label="Email address" />
                <RHFTextField
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                    }}>
                                    {showPassword ? <Eye /> : <EyeSlash />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Stack>
            <Stack alignItems={"flex-end"} sx={{ my: 2 }}>
                <Link component={RouterLink} to="/auth/reset-password" variant='body2' color="inherit" underline='always'>
                    Forgot Password?
                </Link>

            </Stack>
            <Button
                fullWidth
                color='inherit'
                size='large'
                type='submit'
                variant='contained'
                sx={{
                    bgcolor: "text.primary",
                    color: (theme) => theme.palette.mode === "light" ? "common.white" : "grey.800",
                    '&:hover': {
                        bgcolor: "text.primary",
                        color: (theme) =>
                            theme.palette.mode === "light" ? "common.white" : "grey.800",
                    },
                }}>
                Login
            </Button>
        </FormProvider>
    );
};

export default LoginForm;