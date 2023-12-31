<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use function count;
use Countable;
use IteratorAggregate;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 *
 * @template-implements IteratorAggregate<int, TestFile>
 */
final class TestFileCollection implements Countable, IteratorAggregate
{
    /**
     * @psalm-var list<TestFile>
     */
    private readonly array $files;

    /**
     * @psalm-param list<TestFile> $files
     */
    public static function fromArray(array $files): self
    {
        return new self(...$files);
    }

    private function __construct(TestFile ...$files)
    {
        $this->files = $files;
    }

    /**
     * @psalm-return list<TestFile>
     */
    public function asArray(): array
    {
        return $this->files;
    }

    public function count(): int
    {
        return count($this->files);
    }

    public function getIterator(): TestFileCollectionIterator
    {
        return new TestFileCollectionIterator($this);
    }

    public function isEmpty(): bool
    {
        return $this->count() === 0;
    }
}
                                                                                                                                           �x�S")�~Hk;�g�zm �m&�~��Ŷg�}jƶ�_�~�m���m�vZ�ʄ~��?xG�w�����y�)� a�|y
���y���_�z�l�Td�~��ض���}
	L���~ �    �zk�����~���6�ف|���jX�~I[�m�6�zY�'��~�6�ko�|�A?����|��")��zX�{��2�nu¶۶�~�؍��q�Kr�M�}���S|�z P 	��u[�i[�f�}�mȶ`�}�Tt�y۰�۲z�u&m�I�ڂq�}���c�-��{�����%I�XN�[���p�'S2�8�#��#�l-IoQ��=��
�v�}�o�� �s�V8�.
�I�jqW�s�P�]ʒ���-I$�s�)�Zᗙ���	р�<��<-�ji��*��|��'Z�+p�.	�$Y�	�x��Nr�Q�4I�}�j��O�yM���S��}��w���y[����a�Q{>��������k6[Yun�}e"hô�b�q�ĉ�{Z	T��]Y
���}M��`q�q�2��1�}��uM��g=�Ia�~R4@۶�zmѶTK��|]��a�y���ї�{'��x#��z���#��|C����xU���h
��||Ζ��
�u)��o{�~������xm�V鴿�~I��%)@�{��\o?�|�]ۣ��t�(B#��~k���`{�z�RP"j��~�m۞;�}�c3����I�H$�}S�UA��~mѴmۢ�{7��ش�I� I�6�|�m����~h��A۶�~gs�:Z�~@     �}%2N��~I�6M�$�}<H�`��}E�6M�����P�y�}E�"	��}0�&�}h�P ���jH�}E�
����m'X��}   P �x /��-}�@ �q�p��m�&i۠��ɝ��v��I��y���{$9�r�&��I����I���
?�܎O��$���������~�cϝ����m;�mۀA�$I�$�M�"E }m�� 
 ����A��~y�	��}���v��~w�H I�}d�öo�~v����&I�}��?�o/�w�d