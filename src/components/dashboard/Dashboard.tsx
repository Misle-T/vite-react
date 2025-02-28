import React, { useReducer } from "react";
import { formReducer, initialState } from "../../reducers/userReducer";
import { CreateAccountFormData, FormErrors } from "../../types/user";
import { InputField } from "../forms/InputField";
import { SelectField } from "../forms/SelectField";
import { PasswordField } from "../forms/PasswordField";
import { userService } from "../../services/user";
import { handleNetworkError } from "../../utils/networkErrorHandler";
import { useNotification } from "../../hooks/useNotification";
import { Notification } from "../ui/Notification";
import { Spinner } from "../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../navbar/NavBar";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";

export const Dashboard: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { notification, showNotification, hideNotification } =
    useNotification();
  const navigate = useNavigate();

  const validatePassword = (password: string): string => {
    const minLength = 10;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&,.])[A-Za-z\d@$!%*?&,.]{10,}$/;

    if (!password) return "Password is required";
    if (password.length < minLength)
      return `Password must be at least ${minLength} characters long`;
    if (!passwordRegex.test(password))
      return "Password must contain uppercase, lowercase, number, and special character";
    return "";
  };

  const validatePhoneNumber = (phoneNumber: string): string => {
    const phoneRegex = /^(09|07)\d{8}$/;

    if (!phoneNumber) return "Phone number is required";
    if (!phoneRegex.test(phoneNumber))
      return "Phone number must start with 09 or 07 and be 10 digits long";
    return "";
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const { formData } = state;

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.companyName)
      newErrors.companyName = "Company name is required";
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";

    const phoneError = validatePhoneNumber(formData.telephone);
    if (phoneError) newErrors.telephone = phoneError;

    dispatch({ type: "SET_ERRORS", errors: newErrors });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch({ type: "SET_LOADING", isLoading: true });
      const { confirmPassword, ...userData } = state.formData;
      try {
        const response = await userService.createUser(userData);
        showNotification("success", "Account Created successfully!");
        navigate("/login");
      } catch (error: any) {
        showNotification("error", error.message);
      } finally {
        dispatch({ type: "SET_LOADING", isLoading: false });
      }
      // createUser(userData)
      //   .then(() => {
      //     dispatch({
      //       type: "SET_SUCCESS",
      //       message: "Account created successfully!",
      //     });
      //   })
      //   .catch((error) => {
      //     dispatch({
      //       type: "SET_ERROR",
      //       message: handleNetworkError(error),
      //     });
      //   })
      //   .finally(() => {
      //     dispatch({ type: "SET_LOADING", isLoading: false });
      //   });
    }
  };

  const updateField = (field: keyof CreateAccountFormData, value: string) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  // const { formData, errors, isLoading, successMessage, errorMessage } = state;

  return (
    <div>
      <div className="container">
        <NavBar />
      </div>
      <div>
        <Hero />
      </div>
      <Footer />
    </div>
  );
};
