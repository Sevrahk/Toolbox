# Toolbox.js

toolbox.js is a library to easily manage media components and perform simple data manipulations.

This library works as a standalone library, and can works well with any other JavaScript library like jQuery, jQueryMobile, Prototype, MooTools...

## Installation

You can download the library form GitHub repository.

| **File** | **Description** | **Size** | **Download** |
|:------------|:----------------|:---------|:-----------|
| `toolbox.js` | *uncompressed, with comments* | 6.87 KB | [Download](https://raw.github.com/Sevrahk/Toolbox/master/src/toolbox.js) |
| `toolbox.min.js` | *compressed, without comments* | 2.01 KB | [Download](https://raw.github.com/Sevrahk/Toolbox/master/src/toolbox.min.js) |

To use the library you just need to include it in your project and call it in your html documents.

``` html
<script src='toolbox.min.js'></script>
```

## Usage

To use the library you need to initialize a toolbox object.

### Example
```javascript
var toolbox = new Toolbox();
```

# Documentation

**Methods**

* Media Functions
    * [play](#play)
    * [pause](#pause)
    * [stop](#stop)
    * [resetMedia](#resetMedia)
    * [changeCurrentTime](#changeCurrentTime)
    * [isPlaying](#isPlaying)
    * [changeVolume](#changeVolume)
    * [isMedia](#isMedia)
* Array Functions
    * [shuffle](#shuffle)
    * [getMin](#getMin)
    * [getMax](#getMax)
    * [getSum](#getSum)
    * [getAvg](#getAvg)
* Utility Functions
    * [getRandom](#getRandom)
    * [degreesToRadians](#degreesToRadians)
    * [radiansToDegrees](#radiansToDegrees)

## Media Functions

<a name="play"></a>
### play(selector[, onEndCallback])

Play the selected media.  
`selector` string refers to the selected media tag or css class or ID.  
`onEndCallback` (optional) callback function.

```javascript
toolbox.play('.mediaTag');
```

```javascript
toolbox.play('.mediaTag', function() {
    console.log('Media ended');
});
```

<a name="pause"></a>
### pause(selector)

Set the media to pause.  
`selector` string refers to the selected media tag or css class or ID.

```javascript
toolbox.pause('.mediaTag');
```

<a name="stop"></a>
### stop(selector)

Stop the media and reset its current time.  
`selector` string refers to the selected media tag or css class or ID.

```javascript
toolbox.stop('.mediaTag');
```

<a name="resetMedia"></a>
### resetMedia(selector)

Change the media current time.  
`selector` string refers to the selected media tag or css class or ID.

```javascript
toolbox.reset('.mediaTag');
```

<a name="changeCurrentTime"></a>
### changeCurrentTime(selector, newTime)

Set the media current time to zero.  
`selector` string refers to the selected media tag or css class or ID.  
`newTime` nummber of seconds of the new current time.

```javascript
toolbox.changeCurrentTime('.mediaTag', 60);
```

<a name="isPlaying"></a>
### isPlaying(selector)

Check if the media is playing.  
`selector` string refers to the selected media tag or css class or ID.

```javascript
toolbox.isPlaying('.mediaTag');
```

<a name="changeVolume"></a>
### changeVolume(selector, newVolume[, duration, steps, onEndCallback])

Check if the media is playing.  
`selector` string refers to the selected media tag or css class or ID.  
`newVolume` number between 0 and 1.  
`duration` (optional) changing duration time in milliseconds.  
`steps` (optional) number of changing steps.  
`onEndCallback` (optional) callback function.

```javascript
toolbox.changeVolume('.mediaTag', 0.2);
toolbox.changeVolume('.mediaTag', 0.2, 10000, 10);
toolbox.changeVolume('.mediaTag', 0.2, 10000, 10, function() {console.log('Volume changed')});
```

<a name="isMedia"></a>
### isMedia(selector)

Check if the selector refers to an audio or a video tag.  
`selector` string refers to the selected media tag or css class or ID.

```javascript
toolbox.isMediaTag('.mediaTag');
```

## Array Functions

<a name="shuffle"></a>
### shuffle(array)

Shuffle the entered array.  
`array` the array to shuffle.

```javascript
var arr = [1, 2, 3, 4];
toolbox.shuffle(arr);
```

```javascript
toolbox.shuffle([1, 2, 3, 4]);
```

<a name="getMin"></a>
### getMin(array)

Get min number of the array.  
`array`

```javascript
var arr = [1, 2, 3, 4];
toolbox.getMin(arr);
```

```javascript
toolbox.getMin([1, 2, 3, 4]);
```

<a name="getMax"></a>
### getMax(array)

Get max number of the array.  
`array`

```javascript
var arr = [1, 2, 3, 4];
toolbox.getMax(arr);
```

```javascript
toolbox.getMax([1, 2, 3, 4]);
```

<a name="getSum"></a>
### getSum(array)

Get sum of numbers.  
`array`

```javascript
var arr = [1, 2, 3, 4];
toolbox.getSum(arr);
```

```javascript
toolbox.getSum([1, 2, 3, 4]);
```

<a name="getAvg"></a>
### getAvg(array)

Get avarage number.  
`array`

```javascript
var arr = [1, 2, 3, 4];
toolbox.getAvg(arr);
```

```javascript
toolbox.getAvg([1, 2, 3, 4]);
```

## Utility Functions

<a name="getRandom"></a>
### getRandom(min, max)

Get random value between entered values.  
`min` minimum (included).  
`max` maximum (included).

```javascript
toolbox.getRandom(1, 100);
```

<a name="degreesToRadians"></a>
### degreesToRadians(degrees)

Convert degrees to radians.  
`degrees` number to convert in radians.

```javascript
toolbox.degreesToRadians(100);
```

<a name="radiansToDegrees"></a>
### radiansToDegrees(radians)

Convert radians to degrees.  
`radians` number to convert in degrees.

```javascript
toolbox.radiansToDegrees(100);
```
