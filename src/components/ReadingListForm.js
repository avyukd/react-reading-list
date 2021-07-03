import {Container, TextField, Button, Typography} from "@material-ui/core";
import { useState } from "react";
import firebase from "./firebase";


const ReadingListForm = props => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredURL, setEnteredURL] = useState('');
    const [enteredTags, setEnteredTags] = useState('');

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const urlHandler = (event) => {
        setEnteredURL(event.target.value);
    }
    const tagsHandler = (event) => {
        setEnteredTags(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const dbRef = firebase.database().ref("readingList");
        const readingEntryData = {
            title: enteredTitle,
            url: enteredURL,
            tags: enteredTags.toLowerCase(),
            haveRead: false
        };
        dbRef.push(readingEntryData);
        setEnteredTags('');
        setEnteredTitle('');
        setEnteredURL('');
    }
    return (
        <Container maxWidth="md">
            <form onSubmit={submitHandler}>
                <Typography variant="subtitle1">Add Reading Entry</Typography>
                <TextField value={enteredTitle} label="Title" onChange={titleHandler}/>
                <TextField value={enteredURL} label="URL" onChange={urlHandler}/>
                <TextField value={enteredTags} label="Tags" onChange={tagsHandler}/><br/>
                <Button type="submit" color="primary">Add</Button>
            </form>
        </Container>
    );
}

export default ReadingListForm; 