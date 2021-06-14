import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
      whiteSpace: 'nowrap', 
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
      minWidth: 120,
      maxWidth: 200,
      whiteSpace: 'nowrap', 
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));

function PgkMultiSelectField(props) {
    const classes = useStyles();

    // const [option, setOption] = useState({});

    // useEffect(()=>{
    //     if(props?.options?.length && props?.value?.trim()!=='') {
    //         const option = props?.options?.find((item)=>item?.value===props?.value);
    //         // console.log('option ', option);
    //         setOption(option ? option : {});
    //     }

    // }, [props?.options, props?.value]);

    const {
        label='',
        variant='outlined',
        size='small',
        name='',
        values=[],
        onChange=()=>{},
        disabled=false,
        className='',
        required=false,
        errorMessage='',
        styles={width:'100%'},
        validations=[],
        options=[],
        labelStyles={},
        selectStyles={},
        menuStyles={}
    } = props

    const onSelect = (event) => {

        const _values = event.target.value;

        let updatedValues = [];

        options.forEach(item => {
            if(_values.includes(item.value)) {
                updatedValues.push(item);
            }
        })

        let newValidations = [];
        if(required) {
            newValidations = ['isRequired', ...validations]
        }

        const errorString = fieldValidations(updatedValues, newValidations);
        onChange(name, updatedValues, errorString);
    }

    const getLabel = (value) => {
        if(values?.length) {
            const item = values.find((item)=>item.value===value);
            return item.label;
        } else {
            return ''
        }
    }

    return (
        <FormControl size={size} variant="outlined" style={styles} disabled={disabled} required={required} error={errorMessage!==undefined && errorMessage?.trim()!=='' ? true : false}>
            <InputLabel style={labelStyles}>{label}</InputLabel>
            <Select
                value={values?.length ? values.map((item)=>{
                    return item.value
                }) : []}
                onChange={onSelect}
                label={label}
                autoWidth
                multiple
                style={selectStyles}
                renderValue={(selected) => {
                    return (
                        <div className={classes.chips}>
                          {selected?.map((value) => (
                            <Chip key={value} label={getLabel(value)} className={classes.chip} />
                          ))}
                        </div>
                      )
                }}
            >
                <MenuItem style={menuStyles} className={'py-2'} value={''}>{`Select ${label}`}</MenuItem>
                {options?.length ? options.map((option)=>{
                    return <MenuItem className={'py-0'} style={menuStyles} value={option?.value}>
                        <Checkbox size={'small'} checked={values && values.length ? values.findIndex((item)=>item.value===option.value)>-1 : false} color={'primary'} />
                        {option?.label}
                    </MenuItem>
                }) : null}
            </Select>
            <FormHelperText error={errorMessage!==undefined && errorMessage?.trim()!=='' ? true : false}>{errorMessage!==undefined && errorMessage?.trim()!=='' ? errorMessage : ''}</FormHelperText>
        </FormControl>
    );
}

const fieldValidations = (value, validations) => {
    let error;

    if (validations && validations.length) {
        let flag = true;
        validations.forEach(validationsListItem => {
            if (flag) {
                if(typeof validationsListItem==='string') {
                    if (validationsListItem === 'isRequired') {
                        error = validateIsRequired(value);
                    }
                } else if(typeof validationsListItem==='function') {
                    error = validationsListItem(value)
                }

                if (error !== undefined) {
                    flag = false
                }
            }
        });
    }

    return error;
}

function validateIsRequired(value) {
    let error;
    if (value==null || value == undefined || value.length === 0) {
        error = 'Required';
    }

    if(value?.length) {
        if(value.every(item=>item===null || item === undefined || item?.toString()?.trim()==='')) {
            error = 'required'
        }
    }

    return error;
}

export default PgkMultiSelectField;