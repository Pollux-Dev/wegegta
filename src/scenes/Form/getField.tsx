import {
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';

import s from './forms.module.scss';
import { FormikContextType } from 'formik/dist/types';

const fileTypes = (fileType: string) => {
  switch (fileType) {
    case 'image':
      return 'image/*';
    case 'video':
      return 'video/*';
    case 'audio':
      return 'audio/*';
    case 'pdf/word':
      return 'text/csv,application/msword,application/pdf, .csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  }
};

export const getField = (
  field: Record<string, any>,
  formik: FormikContextType<any>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const isChecked = (name: string, value: any) => {
    if (Array.isArray(formik.values[name])) {
      return formik.values[name].includes(value);
    }

    return false;
  };

  const handleCheckboxChange = (name: string, value: any) => {
    if (isChecked(name, value)) {
      const nextValue = formik.values[name].filter(
        (item: any) => item !== value,
      );
      formik.setFieldValue(name, nextValue);
    } else {
      const prevValue = formik.values[name] || [];
      formik.setFieldValue(name, [...prevValue, value]);
    }
  };

  switch (field.__component) {
    case 'form.textfield':
      return (
        <TextField
          name={field.name}
          value={formik.values[field.name]}
          onChange={formik.handleChange}
          type={field.type}
          placeholder={field.placeholder}
          label={field.label}
          multiline={field.type === 'text' && field.multiline}
          rows={4}
          fullWidth
          required={field.required}
        />
      );

    case 'form.checkbox':
      return (
        <FormControl
          className={s.checkbox_form_group}
          component="fieldset"
          required={field.required}
        >
          <FormLabel component="legend">{field.label}</FormLabel>
          <FormGroup className={s.items} row>
            {(field.items as any[]).map((boxItem, idx) => (
              <FormControlLabel
                className={s.checkbox}
                key={idx}
                control={
                  <Checkbox
                    value={boxItem.text}
                    checked={isChecked(field.name, boxItem.text)}
                    onChange={() =>
                      handleCheckboxChange(field.name, boxItem.text)
                    }
                  />
                }
                label={boxItem.text}
                required={
                  !!(field.required && !formik.values[field.name]?.length)
                }
                name={field.name}
              />
            ))}
          </FormGroup>
        </FormControl>
      );
    case 'form.agreement':
      return (
        <FormControlLabel
          className={s.agreement}
          required={field.required}
          name={field.name}
          label={field.label}
          control={
            <Checkbox
              // checked={isChecked(field.name, field.text)}
              onChange={(event, checked) => {
                formik.setFieldValue(field.name, checked);
              }}
            />
          }
        />
      );
    case 'form.radiobox':
      return (
        <FormControl className={s.radio_form_group} required={field.required}>
          <FormLabel>{field.label}</FormLabel>
          <RadioGroup
            className={s.items}
            row
            name={field.name}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
          >
            {(field.items as any[]).map((radioItem, idx) => (
              <FormControlLabel
                className={s.checkbox}
                key={idx}
                control={<Radio />}
                label={radioItem.text}
                value={radioItem.text}
                required={field.required}
                name={field.name}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
    case 'form.select':
      return (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{field.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name={field.name}
            placeholder={field.placeholder}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            label={field.label}
            required={field.required}

            // onChange={handleChange}
          >
            {(field.items as any[]).map((item, idx) => (
              <MenuItem key={idx} value={item.text}>
                {item.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    case 'form.file-uploader':
      // return <FileUploader />;
      return (
        <div>
          <FormControl>
            <FormLabel>{field.label}</FormLabel>
            <TextField
              type="file"
              variant="outlined"
              name={field.name}
              // value={formik.values[field.name.text]}
              onChange={async (ev: any) => {
                if (!ev.target.files[0]) return;

                formik.setFieldValue(field.name, `${ev.target.files[0].name}`);
              }}
              required={field.required}
              InputProps={{}}
              inputProps={{
                accept: fileTypes(field.fileType),
              }}
            />
          </FormControl>
        </div>
      );

    default:
      return (
        <Chip
          color="error"
          variant="outlined"
          label="this is unknown component"
        />
      );
  }
};

// regex for no space, no number, no special character
export const regex = /^[a-zA-Z]+$/;
