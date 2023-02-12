import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Grid, IconButton, Link, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import './Quote.sass';
import { useRandomQuoteQuery } from './quoteApi';

export const Quote = (props) => {
  const getRandomQuoteRtk = useRandomQuoteQuery();

  if (!getRandomQuoteRtk.isFetching) {
    const rootTag = document.querySelector(':root');

    // Generate new primary color
    const newPrimaryColor = '#' + (Math.floor(Math.random() * 899) + 100);

    // Set new primary color
    rootTag.style.setProperty('--primary-color', newPrimaryColor);
  }

  const quote = {
    quote: getRandomQuoteRtk.data?.quote,
    author: getRandomQuoteRtk.data?.author,
  };

  const postToTwitterUrl =
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
    encodeURI('"' + getRandomQuoteRtk.data?.quote + '"  ' + getRandomQuoteRtk.data?.author);

  return (
    <Grid id="quote">
      <Grid id="quote-box">
        <Typography id="text" variant="h5">
          <FormatQuoteIcon style={{ rotate: '180deg' }} />
          {quote.quote}
          <FormatQuoteIcon />
        </Typography>

        <Grid id="author"> - {quote.author}</Grid>

        <Stack id="stack" direction="row" justifyContent="space-between" alignItems="center" spacing={2} marginTop={2}>
          <Grid>
            <IconButton id="tweet-quote" variant="contained" href={postToTwitterUrl} target="_blank" size="small">
              <TwitterIcon fontSize="small" />
            </IconButton>
          </Grid>

          <Grid>
            <Button id="new-quote" variant="contained" onClick={getRandomQuoteRtk.refetch} size="small">
              New quote
            </Button>
          </Grid>
        </Stack>
      </Grid>
      <Grid id="app-author">
        by{' '}
        <Link href="https://www.linkedin.com/in/hisham-taha-kamal-al-din" target="_blank">
          Hisham
        </Link>
      </Grid>
    </Grid>
  );
};
