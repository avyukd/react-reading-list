import React from 'react';
import ReadingListEntry from "./components/ReadingListEntry";
import ReadingListForm from "./components/ReadingListForm";
import {Typography, Container, Grid, CssBaseline, AppBar, Toolbar, Card} from '@material-ui/core';
import BookIcon from '@material-ui/icons/Book';
import firebase from "./components/firebase";
import ReadingListFilter from "./components/ReadingListFilter";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            readingList : [],
            filteredReadingList : []
        }
    }

    componentDidMount(){
        const dbRef = firebase.database().ref("readingList");
        dbRef.on('value', (snapshot) => {
            let items = snapshot.val(); 
            let newState = [];
            for(const item in items){
                newState.push({
                    title: items[item].title,
                    tags: items[item].tags,
                    url: items[item].url,
                    haveRead: items[item].haveRead
                });
            }
            this.setState((prevState) => (
                {
                    readingList : newState,
                    filteredReadingList : newState
                }
            ));
        })
    }

    render(){
        const manageFilter = (data) => {
            let filterTags = data.tags.split(", ");
            filterTags = filterTags.map(x => x.toLowerCase());
            const newFilteredReadingList = this.state.readingList.filter((el) => {
                const elementTags = el.tags.split(", ");
                return filterTags.every((val) => elementTags.includes(val));
            });
            this.setState((prevState) => (
                {
                    readingList : prevState.readingList,
                    filteredReadingList : newFilteredReadingList
                }
            ));
        }

        const manageCheckbox = data => {
            //data.id is entry to update as being read
            
        }

        return(
            <div>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                    <BookIcon />
                    <Typography variant="h6" style={{textAlign: "center"}}>Reading List</Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={3}>
                                <Container align="center">
                                    <Card>
                                        <ReadingListFilter sendFormData={manageFilter}/>
                                    </Card>
                                </Container>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Container align="center">
                                    <Card>
                                        <ReadingListForm />
                                    </Card>
                                </Container>
                            </Grid>
                            {this.state.filteredReadingList.map((el) => 
                                    (<Grid item xs={12} sm={3}>
                                        <ReadingListEntry
                                            title={el.title}
                                            tags={el.tags}
                                            url={el.url}
                                            haveRead={el.haveRead}
                                            haveReadHandler={manageCheckbox}
                                        />
                                    </Grid>)
                            )}
                        </Grid>
                    </Container>
                </main>
            </div>
        );
    }
}


export default App; 