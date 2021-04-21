import { v4 as uuidv4 } from "uuid";

function trackPlaylist() {
  return [
    {
      name: "Somewhere in Paris",
      cover:
        "https://assets.audiomack.com/rexxliferaj/6537f3904df24b03826e568cb668956e5a7f6df21a7bedf15d380a5e918eec72.jpeg?type=album&width=280&height=280&max=true",
      artist: "Rexx Life Raj & Kenny Beats",
      audio:
        "https://music.audiomack.com/albums/rexxliferaj/father-figure-3-somewhere-out-there/streaming/1-4-rexx-life-raj-somewhere-in-paris-usuyg1275496-explicit.mp3?Expires=1618957512&Signature=MQE-qb4T9Cos7ZY0SwuLgDaOiFw7X9sHnLe2QMMuhOMAjaEC4g0OGgwDsR8FBVPgKBHy~e3ka31RaT~SsSn8xPGItdpuqSkQPDPh94WWeGEG36t9~PWfidpg86GcbAxjZZ1kEYeverQDbG75Ie~SMNfBwyMI6nVqju1kC11sAZQ_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA",
      color: ["#F8213D", "#B5BBC7"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Take You back",
      cover:
        "https://assets.audiomack.com/russ/6bf7c31d51d838f024108a942a0d2517014016da2cd1d8a0764aa69a3b59b728.jpeg?width=165&height=165&max=true",
      artist: "Russ Feat. Kehalni",
      audio:
        "https://music.audiomack.com/streaming/russ/take-you-back.mp3?Expires=1619100203&Signature=a2y-b5~rmbyFyLzWpJe4mkB48zJUrUo-fkTe5h1johBvIohlTrf7jGgvnKbUUgNIG94qCm7ApRpzetPW8aE2gIL7idea-1NX2rHCfJeIJqxUE0I81cIwtivRFkwzQC3l8jkM5yrIfv4mNqNeeyd8rz1bLTvrH1Bp4~vbASfahpE_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA",
      color: ["#EDE672", "#FFFCF8"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "New Wave",
      cover:
        "https://assets.audiomack.com/jacquees/3333ceaca9755d8a7c25ca0145055ce225d10824dbf74697a7ca8a2f61c44e43.jpeg?width=165&height=165&max=true",
      artist: "Jacquees",
      audio:
        "https://music.audiomack.com/albums/jacquees/mood/streaming/new-wave.mp3?Expires=1619028493&Signature=EpReptwrS8pY9VgqQnAwbAtcK3UkJJBmKK7mkRmhSwMH1B~uhPsKrOXOLgB6qD2lhjiM6H65kF0mL90DgPuZ1XLWthfBaU21fDaUYcrplr6uOQZkeXsCl~Xs3LFV8I~xR-WujiVYZuZP005UIQKxpSgLBxhVJLrl-FwvzGqpI7w_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA",
      color: ["#E1451C", "#F5C2A8"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Mutual",
      cover:
        "https://assets.audiomack.com/jacoblatimore/c3505797728dfe9672624b0e2c5671bea3ea2b540fc6bc61d97edf25bc5e3863.jpeg?type=album&width=280&height=280&max=true",
      artist: "Jacob Latimore",
      audio:
        "https://music.audiomack.com/streaming/jacoblatimore/mutual-main.mp3?Expires=1619100602&Signature=VAB9aV8XXV9D5m6TZnoWfXEY11pXdHcTpmfAmeGWkd2R4Qt5Vf0o0YRY9DhhMUdU9o6eBUi9yUBtJGaBBHRwXBqS4walOx-cpfX0IEBwmfEqHL3MS9vlX7V83tkfufCxOLz7MfPTzTqKHCEd8lnHo0t9YwT8rhRXnas2aXvWg2o_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA",
      color: ["#FEB43B", "#F9E5D4"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Got My Back",
      cover:
        "https://assets.audiomack.com/rimon/d9893fb5e2d59d4865560d7b5781597f2c883435760836b316a2b189d46466ea.jpeg?width=165&height=165&max=true",
      artist: "RIMON & Denzel Curry",
      audio:
        "https://music.audiomack.com/albums/rimon/i-shine-u-shine/streaming/1-4-rimon-got-my-back-usuyg1303951-explicit.mp3?Expires=1619029092&Signature=PUPA4dnou5gQw4T1P8gPc2bIlimzptoDHJkgat1HMGjvOgVXXM6SikBfvqd4NO-aPhGPk5o02Y738v-6C7X2~8HAcSQ9QuSZpbKhrQSRGWDneuYwfEmz-fxPMkkLhprk3t2Dpv3vx9Jwc6aV872OgIWc28n4zXfbvzOq2c8yKC8_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA",
      color: ["#8790AA", "#E0D2BB"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default trackPlaylist;
