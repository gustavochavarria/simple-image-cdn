# Simple Image CDN

Simple and free image CDN


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
    <td>param</td>
    <td>options</td>
    <td>description</td>
    <td>example</td>
</tr>

<tr>
    <td>Width</td>
    <td>w</td>
    <td>Number (pixels)</td>
    <td>Sets the width of the image, in pixels.</td>
    <td>``options = {w : 1080} ``</td>
</tr>

<tr>
    <td>Height</td>
    <td>h</td>
    <td>Number (pixels)</td>
    <td>Sets the height of the image, in pixels.</td>
    <td>``options = {h: 1080}``</td>
</tr>

<tr>
    <td>Fit</td>
    <td>fit</td>
    <td>cover, fill, contain, inside, outside, we</td>
    <td>Set height of the image</td>
    <td>``options = {fit: 'cover'}``</td>
</tr>

<tr>
    <td>Device pixel ratio</td>
    <td>dpr</td>
    <td>Values between 1 and 8</td>
    <td>The device pixel ratio is used to easily convert between CSS pixels and device pixels.</td>
    <td>``options = {dpr: 2}``</td>
</tr>

<tr>
    <td>Smart crop</td>
    <td>a</td>
    <td>entropy: focus on the region with the highest.
    <br>attention: focus on the region with the highest luminance frequency, color saturation and presence of skin tones.
    </td>
    <td>An experimental strategy-based approach to crop the image by removing boring parts. This only works with {fit : cover}</td>
    <td>``options = {fit : cover, a : attention}``</td>
</tr>

<tr>
    <td>Blur</td>
    <td>blur</td>
    <td>Use values between 0 and 100.</td>
    <td>Adds a blur effect to the image.</td>
    <td>``options = {blur: 5}``</td>
</tr>

<tr>
    <td>Contrast</td>
    <td>con</td>
    <td>Use values between -100 and +100, where 0 represents no change.</td>
    <td>Adjusts the image contrast.</td>
    <td>``options = {blur: 5}``</td>
</tr>

<tr>
    <td>Gamma</td>
    <td>gam</td>
    <td>Use values between 1 and 3. The default value is 2.2, a suitable approximation for sRGB images.</td>
    <td>Adjusts the image gamma.</td>
    <td>``options = {gam: 3}``</td>
</tr>

<tr>
    <td>Brightness</td>
    <td>mod</td>
    <td> A multiplier greater than 1 will increase brightness, while a multiplier less than 1 will decrease the brightness.</td>
    <td>Adjusts the brightness of the image. </td>
    <td>``options = {mod: 2}``</td>
</tr>

<tr>
    <td>Output</td>
    <td>output</td>
    <td>Accepts jpg, png, gif, tiff, webp or json. If none is given, it will honor the origin image format.</td>
    <td>Encodes the image to a specific format.</td>
    <td>``options = {output: 'jpg'}``</td>
</tr>

<tr>
    <td>Quality</td>
    <td>q</td>
    <td>Use values between 0 and 100. Defaults to 85.</td>
    <td>Defines the quality of the image. his only works when the output image is jpg, tiff or webp.</td>
    <td>``options = {q: 90}``</td>
</tr>

<tr>
    <td>Compression level </td>
    <td>l</td>
    <td>Use a value between 0 (no Deflate) and 9 (maximum Deflate).</td>
    <td>The zlib compression level. The default value is 6. This only works when the output image is png</td>
    <td>``options = {l: 4}``</td>
</tr>

<tr>
    <td>Filename</td>
    <td>filename</td>
    <td>String</td>
    <td>To specify the filename returned in the Content-Disposition header. The filename must only contain alphanumeric characters.</td>
    <td>``options = {filename: "foto"}``</td>
</tr>
</table>

### Limitation

You can only process 700 images per hour.


### Special Thanks

We use *Images.weserv.nl*, a cool and free service.
Checkout here: https://images.weserv.nl/

