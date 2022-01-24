setInterval(() =>{
      date=new date();
      htime=d.getHours();
      mtime = d.getMinutes();
      stime = d.getSecond();
      hrotation = 30*htime+mtime/2;
      mrotation = 6*mtime;
      srotation = 6*stime;
      hour.style.transform=`rotate(s{hrotation})`;
      minute.style.transform=`rotate(s{mrotation})`;
      second.style.transform=`rotate(s{srotation})`;

},1000);