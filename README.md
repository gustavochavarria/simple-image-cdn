# Simple Image CDN

simple and free image CDN


## Install

``` yarn add simple-image-cdn ```


``` npm i simple-image-cdn ```

## Usage

```
import getImageUrl from 'simple-image-cdn';
```

## Example

```
const url = 'https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg';
const src = getImageUrl(url, {w: '100', h: '100', fit: 'cover' });

console.log(src)

//expect url:
//https://images.weserv.nl/?url=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F03%2F27%2F18%2F54%2Ftechnology-1283624_960_720.jpg&w=100&h=100&fit=cover


```

### Options

<table>
<tr>
    <td>name</td>
    <td>option</td>
    <td>default</td>
    <td>description</td>
</tr>

<tr>
    <td>Width</td>
    <td>w</td>
    <td>640</td>
    <td>Set width of the image (in pixels) ``option = {w : '1080'} ``</td>
</tr>

<tr>
    <td>Height</td>
    <td>h</td>
    <td>640</td>
    <td>Set height of the image (in pixels) ``option = {h: '1080'}``</td>
</tr>

<tr>
    <td>Fit</td>
    <td>fit</td>
    <td>cover</td>
    <td>Set height of the image ``option = {fit: 'cover'}``</td>
</tr>
</table>


### Special Thanks

We use *Images.weserv.nl*, a cool and free service.
Checkout here: https://images.weserv.nl/

