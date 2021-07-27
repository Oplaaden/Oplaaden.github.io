function loader() 
{
  var array1 = [];
  var numbers = 0;
  while(numbers < 75)
  {
    array1.push("Memes/" + String(numbers) + ".jpg");
    numbers += 1;
  }
  shuffle(array1);
}
function shuffle(array1)
{
  var currentIndex = array1.length, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) 
  {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array1[currentIndex], array1[randomIndex]] = [
    array1[randomIndex], array1[currentIndex]]
  }

  stuff(array1);
}
function stuff(array1)
{
  image1 = document.getElementById("1");
  image1.src = array1[0];
  image2 = document.getElementById("2");
  image2.src = array1[1];
  image3 = document.getElementById("3");
  image3.src = array1[2];
  image4 = document.getElementById("4");
  image4.src = array1[3];
  image5 = document.getElementById("5");
  image5.src = array1[4];
  image6 = document.getElementById("6");
  image6.src = array1[5];
  image8 = document.getElementById("7");
  image8.src = array1[6];
  image9 = document.getElementById("8");
  image9.src = array1[7];
  image10 = document.getElementById("9");
  image10.src = array1[8];
  image11 = document.getElementById("10");
  image11.src = array1[9];
  image12 = document.getElementById("11");
  image12.src = array1[10];
  image13 = document.getElementById("12");
  image13.src = array1[11];
  image14 = document.getElementById("13");
  image14.src = array1[12];
  image15 = document.getElementById("14");
  image15.src = array1[13];
  image16 = document.getElementById("15");
  image16.src = array1[14];
  image17 = document.getElementById("16");
  image17.src = array1[15];
  image18 = document.getElementById("17");
  image18.src = array1[16];
  image19 = document.getElementById("18");
  image19.src = array1[17];
  image20 = document.getElementById("19");
  image20.src = array1[18];
  image21 = document.getElementById("20");
  image21.src = array1[19];
  image22 = document.getElementById("21");
  image22.src = array1[20];
  image23 = document.getElementById("22");
  image23.src = array1[21];
  image24 = document.getElementById("23");
  image24.src = array1[22];
  image25 = document.getElementById("24");
  image25.src = array1[23];
  image26 = document.getElementById("25");
  image26.src = array1[24];
  image27 = document.getElementById("26");
  image27.src = array1[25];
  image28 = document.getElementById("27");
  image28.src = array1[26];
  image29 = document.getElementById("28");
  image29.src = array1[27];
  image30 = document.getElementById("29");
  image30.src = array1[28];
  image31 = document.getElementById("30");
  image31.src = array1[29];
  image32 = document.getElementById("31");
  image32.src = array1[30];
  image33 = document.getElementById("32");
  image33.src = array1[31];
  image34 = document.getElementById("33");
  image34.src = array1[32];
  image35 = document.getElementById("34");
  image35.src = array1[33];
  image36 = document.getElementById("35");
  image36.src = array1[34];
  image37 = document.getElementById("36");
  image37.src = array1[35];
  image38 = document.getElementById("37");
  image38.src = array1[36];
  image39 = document.getElementById("38");
  image39.src = array1[37];
  image40 = document.getElementById("39");
  image40.src = array1[38];
  image41 = document.getElementById("40");
  image41.src = array1[39];
  image42 = document.getElementById("41");
  image42.src = array1[40];
  image43 = document.getElementById("42");
  image43.src = array1[41];
  image44 = document.getElementById("43");
  image44.src = array1[42];
  image45 = document.getElementById("44");
  image45.src = array1[43];
  image46 = document.getElementById("45");
  image46.src = array1[44];
  image47 = document.getElementById("46");
  image47.src = array1[45];
  image48 = document.getElementById("47");
  image48.src = array1[46];
  image49 = document.getElementById("48");
  image49.src = array1[47];
  image50 = document.getElementById("49");
  image50.src = array1[48];
  image51 = document.getElementById("50");
  image51.src = array1[49];
  image52 = document.getElementById("51");
  image52.src = array1[50];
  image53 = document.getElementById("52");
  image53.src = array1[51];
  image54 = document.getElementById("53");
  image54.src = array1[52];
  image55 = document.getElementById("54");
  image55.src = array1[53];
  image56 = document.getElementById("55");
  image56.src = array1[54];
  image57 = document.getElementById("56");
  image57.src = array1[55];
  image58 = document.getElementById("57");
  image58.src = array1[56];
  image59 = document.getElementById("58");
  image59.src = array1[57];
  image60 = document.getElementById("59");
  image60.src = array1[58];
  image61 = document.getElementById("60");
  image61.src = array1[59];
  image62 = document.getElementById("61");
  image62.src = array1[60];
  image63 = document.getElementById("62");
  image63.src = array1[61];
  image64 = document.getElementById("63");
  image64.src = array1[62];
  image65 = document.getElementById("64");
  image65.src = array1[63];
  image66 = document.getElementById("65");
  image66.src = array1[64];
  image67 = document.getElementById("66");
  image67.src = array1[65];
  image68 = document.getElementById("67");
  image68.src = array1[66];
  image69 = document.getElementById("68");
  image69.src = array1[67];
  image70 = document.getElementById("69");
  image70.src = array1[68];
  image71 = document.getElementById("70");
  image71.src = array1[69];
  image72 = document.getElementById("71");
  image72.src = array1[70];
  image73 = document.getElementById("72");
  image73.src = array1[71];
  image74 = document.getElementById("73");
  image74.src = array1[72];
  image75 = document.getElementById("74");
  image75.src = array1[73];
  image76 = document.getElementById("75");
  image76.src = array1[74];
}