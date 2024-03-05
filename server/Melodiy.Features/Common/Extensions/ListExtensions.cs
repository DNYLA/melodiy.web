﻿namespace Melodiy.Features.Common.Extensions;

public static class ListExtensions
{
    public static List<T> Sort<T>(this List<T> list, Func<T, string> keySelector, string term)
    {
        //Dictionary of List<T> as some items can have the same score. 
        var scores = new Dictionary<double, List<T>>();
        var orderedList = list.OrderBy(keySelector).ToList();
        term = term.ToLower();

        orderedList.ForEach(item =>
        {
            double score = 0;
            var title = keySelector(item);
            var isInTitle = term.Contains(title);

            //Add extra score for similarities
            var similarity = CalculateJaccardSimilarity(title, term);

            if (isInTitle)
            {
                score += 5;
            }

            score += similarity;

            if (!scores.ContainsKey(score))
            {
                scores[score] = new List<T>();
            }

            scores[score].Add(item);
        });

        // Convert Dictionary into 1D list of <T> objects based on sorted scores
        var sortedScores = scores.Keys.OrderByDescending(score => score);
        var sortedTracks = new List<T>();

        foreach (var score in sortedScores)
        {
            sortedTracks.AddRange(scores[score]);
        }

        return sortedTracks;
    }

    private static double CalculateJaccardSimilarity(string title, string term)
    {
        var set1 = new HashSet<string>(title.Split(' '));
        var set2 = new HashSet<string>(term.Split(' '));

        var intersection = set1.Count(item => set2.Contains(item));
        var union = set1.Count + set2.Count - intersection;

        return (double)intersection / union;
    }
}