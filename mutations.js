function mutation(arr) {
    let element1 = arr[1].toLowerCase();
    let element2 = arr[0].toLowerCase();
    for (let i = 0; i < element1.length; i++) {
      if (element2.indexOf(element1[i]) < 0) return false;
    }
    return true;
  }