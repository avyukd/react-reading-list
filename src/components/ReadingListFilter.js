import {Typography, FormControl, MenuItem, Select, Container, 
    Button, TextField, InputLabel, makeStyles} from '@material-ui/core'
import {useState} from 'react';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    }
  }));

const ReadingListFilter = props => {

    const [enteredTags, setEnteredTags] = useState(''); 

    const formTagsHandler = event => {
        setEnteredTags(event.target.value);
    }

    const formSubmitHandler = event => {
        event.preventDefault()
        const formData = {
            tags: enteredTags
        }
        props.sendFormData(formData);
    }

    const classes = useStyles();

    return(
    <Container maxWidth="md">
        <form onSubmit={formSubmitHandler}>
            <Typography variant="subtitle1">Filter Reading List</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>By Read</InputLabel>
                <Select>
                    <MenuItem value={0}>None</MenuItem>
                    <MenuItem value={1}>Read</MenuItem>
                    <MenuItem value={-1}>Unread</MenuItem>
                </Select>
            </FormControl>
            <TextField label="Tags" onChange={formTagsHandler}/>
            <Button type="submit" color="primary">Apply</Button>
        </form>
    </Container>);
}

export default ReadingListFilter; 
