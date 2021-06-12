const formLabel = {
  "Personal Information": {
    stateId: "personalInfo",
    title: "PERSONAL INFORMATION",
    data: [
      {
        label: "First Name",
        placeholder: "First Name",
        type: "text",
        additional: "required",
      },
      {
        label: "Last Name",
        placeholder: "Last Name",
        type: "text",
        additional: "required",
      },
      {
        label: "Address",
        placeholder: "Address",
        type: "text",
        additional: "required",
      },
      {
        label: "Phone Number",
        placeholder: "Phone Number",
        type: "number",
        additional: "required",
      },
      {
        label: "Email",
        placeholder: "Email address",
        type: "email",
        additional: "required",
      },
    ],
  },
  "Work Experience": {
    stateId: "workExp",
    title: "WORK EXPERIENCES",
    data: [
      {
        label: "Company Name",
        placeholder: "Company Name",
        type: "text",
        additional: "required",
      },
      {
        label: "City",
        placeholder: "City",
        type: "text",
        additional: "required",
      },
      {
        label: "Starting Year",
        placeholder: "YYYY",
        type: "number",
        additional: "required",
      },
      {
        label: "End Year",
        placeholder: "YYYY",
        type: "number",
        additional: "required",
      },
      {
        label: "Role",
        placeholder: "Role",
        type: "text",
        additional: "required",
      },
    ],
  },
  Education: {
    stateId: "edu",
    title: "EDUCATION",
    data: [
      {
        label: "University",
        placeholder: "University",
        type: "text",
        additional: "required",
      },
      {
        label: "City",
        placeholder: "City",
        type: "text",
        additional: "required",
      },
      {
        label: "Major",
        placeholder: "Major",
        type: "text",
        additional: "required",
      },
      {
        label: "Starting Year",
        placeholder: "YYYY",
        type: "number",
        additional: "required",
      },
      {
        label: "End Year",
        placeholder: "YYYY",
        type: "number",
        additional: "required",
      },
    ],
  },
};
export default formLabel;
