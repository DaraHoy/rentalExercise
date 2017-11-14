var rental = {
    name: 'Enterprise',
    economy: "Economy",
    economyAvail: 80,
    midsize: "Midsize",
    midsizeAvail: 180,
    getInfo: function() {
        document.getElementById('name').innerHTML = this.name;
        document.getElementById('economy').innerHTML = this.economy;
        document.getElementById('economyAvail').innerHTML = this.economyAvail;
        document.getElementById('midsize').innerHTML = this.midsize;
        document.getElementById('midsizeAvail').innerHTML = this.midsizeAvail;
    },
    rentEcon: function() {
        this.economyAvail--
            document.getElementById('economyAvail').innerHTML = this.economyAvail;
    },
    rentMid: function() {
        this.midsizeAvail--
            document.getElementById('midsizeAvail').innerHTML = this.midsizeAvail;
    }
}
window.onload = rental.getInfo();
