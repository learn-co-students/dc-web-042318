Let's build out a sample frontend app from scratch (Apple Music Store)!

* Decide on component hierarchy
* Build out App components and 'dumb' components
* Decide what state is and where it lives
* Build out functionality with API

Components:
- SearchBar
- FeaturedMusic
- FeaturedMusicItem
- OtherMusic
- OtherMusicItem

State:
 - Search term
 - featuredMusicResults
 - otherMusicResults

 Questions / follow ups / refactor:
 - State and props trigger re-render
 - Make the app compatible for all browsers
 - improve CSS
 - Have a generic card component (featured music card will have additional play button and music player)
 - Experiment with lodash debounce
 - Pause other songs playing when clicking on Play


## Sample API Response:

```
https://itunes.apple.com/search?limit=8&term=${term}
```

```
const data = {
 "resultCount":8,
 "results": [
{"wrapperType":"track", "kind":"song", "artistId":1419227, "collectionId":626204707, "trackId":626205874, "artistName":"Beyoncé", "collectionName":"4", "trackName":"Run the World (Girls)", "collectionCensoredName":"4", "trackCensoredName":"Run the World (Girls)", "artistViewUrl":"https://itunes.apple.com/us/artist/beyonc%C3%A9/1419227?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/run-the-world-girls/626204707?i=626205874&uo=4", "trackViewUrl":"https://itunes.apple.com/us/album/run-the-world-girls/626204707?i=626205874&uo=4",
"previewUrl":"https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/v4/ed/e3/be/ede3be0b-9579-0470-749f-450e5fdb039a/mzaf_5473759152630145109.plus.aac.p.m4a", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/96/b5/28/96b5280d-379c-af56-a0f5-1825b7a411b4/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/96/b5/28/96b5280d-379c-af56-a0f5-1825b7a411b4/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/96/b5/28/96b5280d-379c-af56-a0f5-1825b7a411b4/source/100x100bb.jpg", "collectionPrice":11.99, "trackPrice":1.29, "releaseDate":"2011-04-21T07:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":14, "trackNumber":11, "trackTimeMillis":238305, "country":"USA", "currency":"USD", "primaryGenreName":"Pop", "isStreamable":true},
{"wrapperType":"track", "kind":"song", "artistId":1419227, "collectionId":626204707, "trackId":626205216, "artistName":"Beyoncé", "collectionName":"4", "trackName":"Love On Top", "collectionCensoredName":"4", "trackCensoredName":"Love On Top", "artistViewUrl":"https://itunes.apple.com/us/artist/beyonc%C3%A9/1419227?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/love-on-top/626204707?i=626205216&uo=4", "trackViewUrl":"https://itunes.apple.com/us/album/love-on-top/626204707?i=626205216&uo=4",
"previewUrl":"https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music2/v4/71/bb/49/71bb4999-9386-3feb-1e48-a4139a5833e4/mzaf_210119998254061436.plus.aac.p.m4a", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/96/b5/28/96b5280d-379c-af56-a0f5-1825b7a411b4/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/96/b5/28/96b5280d-379c-af56-a0f5-1825b7a411b4/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/96/b5/28/96b5280d-379c-af56-a0f5-1825b7a411b4/source/100x100bb.jpg", "collectionPrice":11.99, "trackPrice":1.29, "releaseDate":"2011-06-24T07:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":14, "trackNumber":1, "trackTimeMillis":267541, "country":"USA", "currency":"USD", "primaryGenreName":"Pop", "isStreamable":true},
{"wrapperType":"track", "kind":"song", "artistId":1419227, "collectionId":626204707, "trackId":626205872, "artistName":"Beyoncé", "collectionName":"4", "trackName":"1+1", "collectionCensoredName":"4", "trackCensoredName":"1+1", "artistViewUrl":"https://itunes.apple.com/us/artist/beyonc%C3%A9/1419227?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/1-1/626204707?i=626205872&uo=4", "trackViewUrl":"https://itunes.apple.com/us/album/1-1/626204707?i=626205872&uo=4",
"previewUrl":"https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/v4/a5/fd/be/a5fdbecc-2df9-3925-b4a0-784c423bbcee/mzaf_6527837479129833721.plus.aac.p.m4a", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/96/b5/28/96b5280d-379c-af56-a0f5-1825b7a411b4/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/96/b5/28/96b5280d-379c-af56-a0f5-1825b7a411b4/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/96/b5/28/96b5280d-379c-af56-a0f5-1825b7a411b4/source/100x100bb.jpg", "collectionPrice":11.99, "trackPrice":1.29, "releaseDate":"2011-06-24T07:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":14, "trackNumber":9, "trackTimeMillis":274155, "country":"USA", "currency":"USD", "primaryGenreName":"Pop", "isStreamable":true},
{"wrapperType":"track", "kind":"song", "artistId":1419227, "collectionId":1107429221, "trackId":1107429382, "artistName":"Beyoncé", "collectionName":"Lemonade", "trackName":"Formation", "collectionCensoredName":"Lemonade", "trackCensoredName":"Formation", "artistViewUrl":"https://itunes.apple.com/us/artist/beyonc%C3%A9/1419227?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/formation/1107429221?i=1107429382&uo=4", "trackViewUrl":"https://itunes.apple.com/us/album/formation/1107429221?i=1107429382&uo=4",
"previewUrl":"https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/5f/d7/5f/5fd75fd8-d0a5-ccb2-7822-bcaedee070fc/mzaf_3356445145838692600.plus.aac.p.m4a", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg", "collectionPrice":17.99, "trackPrice":1.29, "releaseDate":"2016-02-06T08:00:00Z", "collectionExplicitness":"explicit", "trackExplicitness":"explicit", "discCount":1, "discNumber":1, "trackCount":12, "trackNumber":12, "trackTimeMillis":206076, "country":"USA", "currency":"USD", "primaryGenreName":"Pop", "contentAdvisoryRating":"Explicit", "isStreamable":false},
{"wrapperType":"track", "kind":"song", "artistId":1419227, "collectionId":201274359, "trackId":201274644, "artistName":"Beyoncé", "collectionName":"Dangerously in Love", "trackName":"Crazy in Love (feat. Jay-Z)", "collectionCensoredName":"Dangerously in Love", "trackCensoredName":"Crazy in Love (feat. Jay-Z)", "artistViewUrl":"https://itunes.apple.com/us/artist/beyonc%C3%A9/1419227?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/crazy-in-love-feat-jay-z/201274359?i=201274644&uo=4", "trackViewUrl":"https://itunes.apple.com/us/album/crazy-in-love-feat-jay-z/201274359?i=201274644&uo=4",
"previewUrl":"https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/v4/59/76/14/59761416-8231-b10a-ed3e-5196c62fc2d7/mzaf_8566429285542921517.plus.aac.p.m4a", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg", "collectionPrice":12.99, "trackPrice":1.29, "releaseDate":"2003-05-18T07:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":15, "trackNumber":1, "trackTimeMillis":236133, "country":"USA", "currency":"USD", "primaryGenreName":"Pop", "isStreamable":true},
{"wrapperType":"track", "kind":"song", "artistId":1419227, "collectionId":296016891, "trackId":296016893, "artistName":"Beyoncé", "collectionName":"I Am... Sasha Fierce", "trackName":"Halo", "collectionCensoredName":"I Am... Sasha Fierce", "trackCensoredName":"Halo", "artistViewUrl":"https://itunes.apple.com/us/artist/beyonc%C3%A9/1419227?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/halo/296016891?i=296016893&uo=4", "trackViewUrl":"https://itunes.apple.com/us/album/halo/296016891?i=296016893&uo=4", "previewUrl":"https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/5c/7b/65/mzm.pcmwyycg.aac.p.m4a", "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music/v4/1b/93/48/1b9348ed-c859-5ac0-c040-b54d0ec5bc50/source/30x30bb.jpg", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music/v4/1b/93/48/1b9348ed-c859-5ac0-c040-b54d0ec5bc50/source/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music/v4/1b/93/48/1b9348ed-c859-5ac0-c040-b54d0ec5bc50/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":1.29, "releaseDate":"2008-11-18T08:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":2, "discNumber":1, "trackCount":7, "trackNumber":2, "trackTimeMillis":261640, "country":"USA", "currency":"USD", "primaryGenreName":"Pop", "isStreamable":true},
{"wrapperType":"track", "kind":"song", "artistId":1419227, "collectionId":261707051, "trackId":261707067, "artistName":"Beyoncé", "collectionName":"B'Day (Deluxe Edition)", "trackName":"Irreplaceable", "collectionCensoredName":"B'Day (Deluxe Edition)", "trackCensoredName":"Irreplaceable", "artistViewUrl":"https://itunes.apple.com/us/artist/beyonc%C3%A9/1419227?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/irreplaceable/261707051?i=261707067&uo=4", "trackViewUrl":"https://itunes.apple.com/us/album/irreplaceable/261707051?i=261707067&uo=4", "previewUrl":"https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/3d/51/99/mzm.vsrvvunr.aac.p.m4a", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/6c/fc/6a/6cfc6a13-0633-f96b-9d72-cf56774beb4b/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/6c/fc/6a/6cfc6a13-0633-f96b-9d72-cf56774beb4b/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/6c/fc/6a/6cfc6a13-0633-f96b-9d72-cf56774beb4b/source/100x100bb.jpg", "collectionPrice":16.99, "trackPrice":1.29, "releaseDate":"2006-09-04T07:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":2, "discNumber":1, "trackCount":16, "trackNumber":2, "trackTimeMillis":227780, "country":"USA", "currency":"USD", "primaryGenreName":"Pop", "isStreamable":true},
{"wrapperType":"track", "kind":"song", "artistId":1419227, "collectionId":626204707, "trackId":626205875, "artistName":"Beyoncé", "collectionName":"4", "trackName":"Best Thing I Never Had", "collectionCensoredName":"4", "trackCensoredName":"Best Thing I Never Had", "artistViewUrl":"https://itunes.apple.com/us/artist/beyonc%C3%A9/1419227?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/best-thing-i-never-had/626204707?i=626205875&uo=4", "trackViewUrl":"https://itunes.apple.com/us/album/best-thing-i-never-had/626204707?i=626205875&uo=4",
"previewUrl":"https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/v4/2e/42/df/2e42df10-719f-cbd5-164a-d7ea2a1b6889/mzaf_5300132403818894530.plus.aac.p.m4a", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/96/b5/28/96b5280d-379c-af56-a0f5-1825b7a411b4/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/96/b5/28/96b5280d-379c-af56-a0f5-1825b7a411b4/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/96/b5/28/96b5280d-379c-af56-a0f5-1825b7a411b4/source/100x100bb.jpg", "collectionPrice":11.99, "trackPrice":1.29, "releaseDate":"2011-06-01T07:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":14, "trackNumber":12, "trackTimeMillis":253756, "country":"USA", "currency":"USD", "primaryGenreName":"Pop", "isStreamable":true}]
};

export default data;
```

### Other Reference Material:

```
import _ from 'lodash';
let debounceFunc = _.debounce(callbackFunc, 200);
```

```
npm install react-player --save
```

```
import ReactPlayer from 'react-player'
<ReactPlayer />

```
