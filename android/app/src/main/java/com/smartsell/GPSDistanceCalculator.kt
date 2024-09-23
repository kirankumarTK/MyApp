package com.smartsell

import android.location.Location
import android.widget.Toast
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.text.DecimalFormat

class GPSDistanceCalculator(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "GPSDistanceCalculator"
    }

    @ReactMethod
    fun showToast(message: String, successCallback: Callback) {
        Toast.makeText(reactApplicationContext, message, Toast.LENGTH_LONG).show()
        successCallback.invoke("Toast shown successfully!")
    }

    @ReactMethod
    fun calculateStoreDistance(
        retailerLat: Double, retailerLong: Double, currentLat: Double, currentLong: Double
    ): Float {
        try {
            val retLoc = Location("")
            retLoc.latitude = truncateLocation(retailerLat)
            retLoc.longitude = truncateLocation(retailerLong)
            val userLoc = Location("")
            userLoc.latitude = truncateLocation(currentLat)
            userLoc.longitude = truncateLocation(currentLong)
            return userLoc.distanceTo(retLoc)
        } catch (e: Exception) {
            return 0.0f
        }
    }

    private fun truncateLocation(originalLocation: Double): Double {
        var location = 0.0
        try {
            val decimalFormat = DecimalFormat("0.0000000000")
            decimalFormat.minimumFractionDigits = 2
            decimalFormat.maximumFractionDigits = 10

            var loc = decimalFormat.format(originalLocation)
            loc = convertNumbersToEnglish(loc)
            loc = loc.replace(",", ".")

            location = loc.toDouble()
        } catch (e: java.lang.Exception) {
            return location
        }

        return location
    }

    private  fun convertNumbersToEnglish(str: String): String {
        var answer = str
        answer = answer.replace("١", "1")
        answer = answer.replace("٢", "2")
        answer = answer.replace("٣", "3")
        answer = answer.replace("٤", "4")
        answer = answer.replace("٥", "5")
        answer = answer.replace("٦", "6")
        answer = answer.replace("٧", "7")
        answer = answer.replace("٨", "8")
        answer = answer.replace("٩", "9")
        answer = answer.replace("٠", "0")
        answer = answer.replace("٫", ".")
        return answer
    }

}