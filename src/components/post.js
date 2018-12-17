import React, {Component} from 'react';
import "../post.css";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LikeIcon from '@material-ui/icons/ThumbUp';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Storage from './storage';
import CircularProgress from '@material-ui/core/CircularProgress';
import Moment from 'react-moment';

class Post extends Component{

  constructor(props){
    super(props);
    this.storage = new Storage();
    this.post = props.post;
    this.state  = {
      likes: this.post.initialLikes,
      loadingLike: false
    }
    this.doLike = this.doLike.bind(this);
  }

  doLike(){
    this.setState({loadingLike:true}, ()=>
      {
        this.storage.incrementPostLike(this.post).then(()=>
            this.setState({likes: this.state.likes +1,
              loadingLike: false})
        );
      }
    );
  }

  render(){
    return(
      <div>
        <Card style={{
            margin:20
          }}>
            <CardContent>
              <Grid container>
                <Grid item xs={'auto'}>
                  <Avatar
                    onClick={()=>this.props.history.push('/user/'+this.post.authorId)}
                    style={{
                      width: 60,
                      height: 60
                    }}
                    alt="" src={this.post.authorPic}/>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    onClick={()=>this.props.onNavigate()}
                    style={{
                      margin: 10
                    }}
                    variant="h5" component="h3">
                    {this.post.content}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>

          <CardActions>
            <Typography variant="caption" component="h5">
              Likes: {this.state.likes}
            </Typography>
            {
              this.state.loadingLike===true?
              <CircularProgress />
              :
              <IconButton
                onClick={this.doLike}
                color="primary"  component="span">
                <LikeIcon />
              </IconButton>
            }
              <Typography  variant="caption" component="h5">
                <Moment fromNow>{this.post.time}</Moment>
              </Typography>
          </CardActions>
        </Card>
      </div>
    )
  }
}
export default Post;
