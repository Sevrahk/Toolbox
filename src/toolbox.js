var Toolbox = (function() {
    'use strict';
    function Toolbox() {}

    //MEDIA
    /**
     * Play the selected media
     *
     * @example play('selector');
     * @example play('selector', function() {console.log('Media ended');});
     *
     * @param {String} selector
     * @param {Function} [onEndCallback]
     */
    Toolbox.prototype.play = function(selector, onEndCallback) {
        this.isMedia(selector);

        var mediaTag = document.querySelector(selector);
        mediaTag.play();

        if(typeof onEndCallback === 'function')
        {
            var callback = function() {
                onEndCallback();
                mediaTag.removeEventListener('ended', callback);
            };
            mediaTag.addEventListener('ended', callback);
        }
    };

    /**
     * Set the media to pause
     *
     * @param {String} selector
     */
    Toolbox.prototype.pause = function(selector) {
        this.isMedia(selector);

        document.querySelector(selector).pause();
    };

    /**
     * Stop the media and reset its current time
     *
     * @param {String} selector
     */
    Toolbox.prototype.stop = function(selector) {
        this.isMedia(selector);
        this.pause(selector);
        this.resetMedia(selector);
    };

    /**
     * Set the media current time to zero
     *
     * @param {String} selector
     */
    Toolbox.prototype.resetMedia = function(selector) {
        this.isMedia(selector);

        document.querySelector(selector).currentTime = 0;
    };

    /**
     * Change the media current time
     *
     * @param {String} selector
     * @param {number} newTime (seconds)
     */
    Toolbox.prototype.changeCurrentTime = function(selector, newTime) {
        this.isMedia(selector);

        document.querySelector(selector).currentTime = newTime;
    };

    /**
     * Check if the media is playing
     *
     * @param {String} selector
     * @returns {Boolean}
     */
    Toolbox.prototype.isPlaying = function(selector) {
        this.isMedia(selector);

        return !document.querySelector(selector).paused;
    };

    /**
     * Change the media volume
     *
     * @example changeVolume('selector', 0.2);
     * @example changeVolume('selector', 0.2, 10000, 10);
     * @example changeVolume('selector', 0.2, 10000, 10, function() {console.log('Volume changed')});
     *
     * @param {String} selector
     * @param {number} newVolume (between 0 and 1)
     * @param {String} [duration] : changing duration time in milliseconds
     * @param {String} [steps] : number of changing steps
     * @param {Function} [onEndCallback]
     */
    Toolbox.prototype.changeVolume = function(selector, newVolume, duration, steps, onEndCallback) {
        this.isMedia(selector);

        var mediaTag = document.querySelector(selector);
        if(duration === undefined || duration === null || duration === 0)
            mediaTag.volume = newVolume;
        else
        {
            var currentVolume = mediaTag.volume,
                volueIncreasing = mediaTag.volume <= newVolume,
                intervalTime = duration / steps,
                changeVolumeInterval;
            var volumeIncrement = (currentVolume - newVolume) * -1 / steps;

            changeVolumeInterval = setInterval(function() {
                currentVolume += volumeIncrement;
                if((volueIncreasing && mediaTag.volume < 1 && currentVolume <= newVolume) || (!volueIncreasing && mediaTag.volume > 0 && currentVolume >= newVolume))
                    mediaTag.volume = currentVolume;
                else
                {
                    clearInterval(changeVolumeInterval);
                    if(typeof onEndCallback === 'function')
                        return onEndCallback();
                }
            }, intervalTime);
        }
    };

    /**
     * Check if the selector refers to an audio or a video tag
     *
     * @param {String} selector
     * @throws {TypeError} : Selector doesn't exists or is not a media tag
     * @returns {Boolean}
     */
    Toolbox.prototype.isMedia = function(selector) {
        if(document.querySelector(selector) === null)
            throw new TypeError('The selector does not exist.');

        if(document.querySelector(selector).tagName.toLowerCase() !== 'audio' && document.querySelector(selector).tagName.toLowerCase() !== 'video')
            throw new TypeError('The selector does not refer to an audio or a video tag.');

        return true;
    };

    //ARRAY
    /**
     * Shuffle the entered array
     *
     * @param {Array} array
     * @returns {Array}
     */
    Toolbox.prototype.shuffle = function(array) {
        var currentIndex = array.length, tmp, randomIndex;
        while(currentIndex !== 0)
        {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            tmp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tmp;
        }

        return array;
    };

    /**
     * Get min number of the array
     *
     * @param {array} array
     *
     * @returns {number}
     */
    Toolbox.prototype.getMin = function(array) {
        return Math.min.apply(Math, array);
    };

    /**
     * Get max number of the array
     *
     * @param {array} array
     *
     * @returns {number}
     */
    Toolbox.prototype.getMax = function(array) {
        return Math.max.apply(Math, array);
    };

    /**
     * Get sum of numbers
     *
     * @param {array} array
     *
     * @returns {number}
     */
    Toolbox.prototype.getSum = function(array) {
        return array.reduce(function(prevVal, currVal) {
            return prevVal + currVal;
        });
    };

    /**
     * Get avarage number
     *
     * @param {array} array
     *
     * @returns {number}
     */
    Toolbox.prototype.getAvg = function(array) {
        return this.getSum(array) / array.length;
    };

    //UTILITY
    /**
     * Get random value between entered values
     *
     * @param {number} min (included)
     * @param {number} max (included)
     *
     * @returns {number}
     */
    Toolbox.prototype.getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    /**
     * Convert degrees to radians
     *
     * @param {number} degrees
     * @returns {number} radians
     */
    Toolbox.prototype.degreesToRadians = function(degrees) {
        return degrees * Math.PI / 180;
    };

    /**
     * Convert radians to degrees
     *
     * @param {number} radians
     * @returns {number} degrees
     */
    Toolbox.prototype.radiansToDegrees = function(radians) {
        return radians * 180 / Math.PI;
    };

    return Toolbox;
})();
