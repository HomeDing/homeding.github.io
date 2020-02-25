# DSTime Element ???

<div class="excerpt">
  <img src="/i/dstime.svg">
  <p>The DSTime Element gets the local time from a chip that contains a high accurate clock running independently from the main board and processor.</p>
</div>

A small battery is required to keep the clock running when power is failing and a crystal oscillator for exact timing is used.

The DSTimeElement is one of the element implementations to get a local time from an external source and to adjust the real local timew on the board.

The advantage of this approach is that a device can have the real time available from the start. Other time receiving elements depend on the availability of a network time server or a broadcasting signal.

After a reboot the time will be restored from the chip. This is a good option for devices that must operate even when the internet is not available like heating systems.

The DSTime Element is an extension to the build-in clock functionality of the board that keeps the current time available as accurate as the internal quartz oscillator can do.

The following chips are supported:

* DS3231
* ???

??? only the time function, no alarms and memory

## Element Configuration

The following properties are available for configuration of the element:

| Property   | Description                                           |
| ---------- | ----------------------------------------------------- |
| `address`  | Specifies the i2c address of the chip.                |
| `readtime` | Specifies the time for re-syncing the on board clock. |


## Example Configuration

```JSON
{
  "dstime": {
    "0": {
      "readtime": "2h",
      "address": "0x68"
    }
  }
}
```

## Element State


```JSON
{
  "dstime/0": {
    "active":"true",
    "now":"2019-01-25 08:14:04"
  }
}
```



## More
* <https://makezine.com/2019/01/18/getting-started-with-real-time-clocks/>
* <https://richard.burtons.org/2015/04/23/real-time-clock-ds1307ds3231-for-the-esp8266/>