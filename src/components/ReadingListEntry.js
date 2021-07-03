import {Typography, CardContent, Card, Container, Checkbox, Link, TextField} from '@material-ui/core';
import firebase from "./firebase";

const ReadingListEntry = props => {

    const handleRead = event => {
        props.haveReadHandler({id: props.url});
    }

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        {!props.haveRead && <Checkbox onChange={handleRead}/>}
                        <Link href={props.url}>{props.title}</Link>
                    </Typography>
                    <Typography variant="caption">{props.tags}</Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default ReadingListEntry; 