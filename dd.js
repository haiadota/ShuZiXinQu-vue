.
s2.toString() == [32].toString()
)
return !0;
var e = ne[0] * ne[0] * 7 + ne[0] * ne[1] * 11 + ne[2] * ne[2] * 13 + 1,
    t = this.f([119, 251, 148, 243, 64, 34, 13, 225, 92, 27, 69, 121]) + e,
    r = this.f([91, 249, 168, 234, 91, 51, 60, 241]), n = this.f([92, 249, 164, 244, 95, 51]);
try {
    if (null != this.l[r][n].match(t)) return !0
} catch (e) {
    return console.error(e), !0
}
return !1
}
a()
{
    if (ie) return !0;
    var e = this.or + this.or + this.or + this.or + this.or + this.on + this.or + this.on + this.or + this.on + this.or,
        t = this.f([77, 247, 165, 251, 89, 59]), r = this.f([75, 249, 152, 235, 68, 63, 60, 226]),
        n = this.f([77, 243, 187, 243, 87, 53, 55]), i = this.m[t]()[r]()[n](".", ""), o = this.f([80, 230, 174, 241]),
        a = this.f([83, 249, 168, 254, 66, 63, 61, 235]),
        s = this.f([88, 243, 191, 205, 83, 37, 34, 234, 83, 28, 65, 12, 249, 143, 128, 113, 16]),
        l = this.f([76, 243, 185, 233, 83, 36]), u = this.f([120, 211, 159]), c = this.f([87, 228, 174, 249]);
    this.req[o](u, this.d[a][c], !1), this.req.send(i);
    var h = this.req[s](l);
    if (!h) return !1;
    var f = this.f([77, 243, 184, 239, 89, 56, 33, 224, 105, 10, 92, 48]), d = this.f([82, 247, 191, 252, 94]),
        p = this.req[f][d](new RegExp(e, "g"));
    return (0 == $.update(h).toString().indexOf([75, 249, 166, 252, 87, 34, 125, 188, 19, 95, 10, 117].toString()) || 0 == $.update(h).toString().indexOf([81, 249, 175, 250, 92, 37].toString())) && null != p && (ie = !0, !0)
}
},
ae = {};
let se = "__auth_uearth_Failed__";
var le = function () {
    let e = THING.App.current;
    if (ce() && !oe.c()) {
        var t = $.toStr([96, 201, 170, 234, 66, 62, 13, 241, 82, 4, 65, 42, 195, 156, 129, 103, 23, 224, 109, 153, 106]);
        e.on(t, function (t) {
            e.uEarth._earthInstance.tileEarth.isEarthShow = !1;
            let r = t._post, n = t._decodeBase64String, i = (new Date).getTime();
            he(i, function (t) {
                if (t && 200 === t.status && t.responseText) if (200 === (t = JSON.parse(t.responseText)).code && t.data && t.data.key) {
                    let r = t.data.key, o = t.data.time;
                    n(r) === ue.getState().k && i === o - 0 ? (e.uEarth._earthInstance.tileEarth.isEarthShow = !0, e.trigger("__auth_uearth_Pass__")) : e.trigger(se)
                } else e.trigger(se); else e.trigger(se)
            }, function (e) {
                console.error(e), THING.App.current.trigger(se)
            }, r)
        })
    }
};
const ue = function () {
    let e = {v: ""};
    return {
        getState: function () {
            return JSON.parse(JSON.stringify(e))
        }, dispatch: function (t) {
            e[t.type] = t.value
        }
    }
}();
var ce = function () {
    var e = $.toStr([93, 243, 191, 254]);
    return ue.getState().v !== e
}, he = function (e, t, r, n) {
    var i,
        o = (i = $.toStr([96, 201, 170, 234, 66, 62, 13, 240, 88, 14, 86, 48, 244, 177, 151, 113, 16, 250, 124, 180, 106, 97, 187, 65, 253, 161]), THING[i] ? THING[i] : ae[i] ? ae[i] : null);
    (o += "?t=" + e) ? n(o, {}, {}, function (e) {
        t && t(e)
    }, r) : THING.App.current.trigger(se)
};
var fe = {High: 1, Low: 2, Medium: 3};
var de = class extends THING.CameraControl{
    constructor(e) {
        super(e)
    }

    flyTo(e) {
        if (void 0 !== e.isEarth && e.isEarth) {
            var t = this.getFlyPos(e), r = t.eyePos, n = t.lookAtPos;
            if ((e.target && e.target.isBaseObject || e.object) && (e.uniformSpeed = !0), this._stopping) return;
            if (this.stopFlying({isEarth: !0}), r && n) e.position = r, e.target = n; else if (!e.lonlat) return;
            this._flying = !0, k.a.earthFlyTo(e)
        } else super.flyTo(e)
    }

    stopFlying(e) {
        void 0 !== (e = e || {}).isEarth && e.isEarth ? k.a.stopEarthFly() : super.stopFlying(e)
    }

    stopRotating(e) {
        void 0 !== (e = e || {}).isEarth && e.isEarth ? k.a.stopEarthFly() : super.stopRotating(e)
    }

    lookAt(e) {
        super.lookAt(e), void 0 !== e.isEarth && e.isEarth && k.a.correctUp()
    }

    rotateAround(e) {
        if (void 0 !== e.isEarth && e.isEarth) {
            let t = e.object, r = e.target, n = THING.Utils.parseValue(e.yRotateAngle || e.angle, 0);
            e.angle = n;
            let i = e.time, o = e.speed;
            if (t && t.isBaseObject && (e.target = r.getOrientedBox().center), r && r.isBaseObject && (e.target = r.getOrientedBox().center), i) {
                if (e.speed = 0, e.loopType = THING.Utils.parseLoopType(e.loopTy