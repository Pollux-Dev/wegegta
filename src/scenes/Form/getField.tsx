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

export const getField = (
  field: Record<string, any>,
  formik: FormikContextType<any>,
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
          name={field.name.text}
          value={formik.values[field.name.text]}
          onChange={formik.handleChange}
          type={field.type}
          placeholder={field.placeholder}
          label={field.label.text}
          multiline={field.multiline}
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
          <FormLabel component="legend">{field.label.text}</FormLabel>
          <FormGroup className={s.items} row>
            {field.items.map((boxItem, idx) => (
              <FormControlLabel
                className={s.checkbox}
                key={idx}
                control={
                  <Checkbox
                    value={boxItem.text}
                    checked={isChecked(field.name.text, boxItem.text)}
                    onChange={() =>
                      handleCheckboxChange(field.name.text, boxItem.text)
                    }
                  />
                }
                label={boxItem.text}
                required={
                  !!(field.required && !formik.values[field.name.text]?.length)
                }
                name={field.name.text}
              />
            ))}
          </FormGroup>
        </FormControl>
      );
    case 'form.radiobox':
      return (
        <FormControl className={s.radio_form_group} required={field.required}>
          <FormLabel>{field.label.text}</FormLabel>
          <RadioGroup
            className={s.items}
            row
            name={field.name.text}
            value={formik.values[field.name.text]}
            onChange={formik.handleChange}
          >
            {field.items.map((radioItem, idx) => (
              <FormControlLabel
                className={s.checkbox}
                key={idx}
                control={<Radio />}
                label={radioItem.text}
                value={radioItem.text}
                required={field.required}
                name={field.name.text}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
    case 'form.select':
      return (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            {field.label.text}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name={field.name.text}
            placeholder={field.placeholder}
            value={formik.values[field.name.text]}
            onChange={formik.handleChange}
            label={field.label.text}
            required={field.required}

            // onChange={handleChange}
          >
            {field.items.map((item, idx) => (
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
            <FormLabel>{field.label.text}</FormLabel>
            <TextField
              type="file"
              variant="outlined"
              name={field.name.text}
              value={formik.values[field.name.text]}
              onChange={formik.handleChange}
              required={field.required}
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
